const mysql = require("mysql");

const connectionKeys = {
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

module.exports = class Connection {
  constructor() {
    this.con = mysql.createConnection(connectionKeys);
    this.connect();
  }

  connect() {
    this.con.connect((err) => {
      if (err) throw err;
      console.log("Connected!");
    });
  }
  disconnect() {
    this.con.end();
  }
  query(query = "", params = []) {
    return new Promise((resolve, reject) => {
      if (params.length > 0) {
        this.con.query(query, [params], (err, result, fields) => {
          if (err) throw err;
          resolve(result);
        });
      } else {
        this.con.query(query, (err, result, fields) => {
          if (err) throw err;
          resolve(result);
        });
      }
    });
  }
};
