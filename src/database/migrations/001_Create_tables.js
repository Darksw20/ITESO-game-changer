const up = async (db) => {
  console.log("up001");
  await db.query(
    `CREATE TABLE event( id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, end_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, ubication VARCHAR(255), timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (id) )`
  );
  await db.query(
    "CREATE TABLE `match`( id INT NOT NULL AUTO_INCREMENT, time TIMESTAMP DEFAULT CURRENT_TIMESTAMP, place VARCHAR(255), score INT, timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (id) )"
  );
  await db.query(
    `CREATE TABLE team( id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), member_size int, timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (id) )`
  );
  await db.query(
    `CREATE TABLE user( id INT NOT NULL AUTO_INCREMENT, first_name VARCHAR(255), last_name VARCHAR(255), username VARCHAR(255), password VARCHAR(255), timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (id) )`
  );
};

const down = (db) => {
  console.log("down001");
};

module.exports = {
  up,
  down,
};
