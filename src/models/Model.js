const Connection = require("../database/connection");
module.exports = class Model {
  constructor(table) {
    this.table = table;
    this.db = new Connection();
  }

  async get(data) {
    const sql = QueryBuilder.filter(this.table, data);
    console.log("get", sql);
    return await this.db.query(sql);
  }

  async create(data) {
    const sql = QueryBuilder.save(this.table, data);
    console.log("create", sql);
    return await this.db.query(sql, Object.values(data));
  }

  async update(data, where) {
    const sql = QueryBuilder.update(this.table, data, where);
    console.log("update", sql);
    return await this.db.query(sql, data);
  }

  async delete(id) {
    const sql = `DELETE FROM ${this.table} WHERE id = ?`;
    console.log("delete", sql);
    return await this.db.query(sql, [id]);
  }
  static filter(data, mask) {
    const filterData = Object.keys(data).reduce((results, property) => {
      if (mask.includes(property)) results[property] = data[property];
      return results;
    }, []);
    return filterData;
  }
};

const QueryBuilder = {
  save: (table, data) => {
    const keys = Object.keys(data).join(",");
    return `INSERT INTO ${table} (${keys}) VALUES (?)`;
  },
  filter: (table, { columns, where }) => {
    let conditions = "";

    if (where) {
      const conditionKeys = Object.keys(where);
      const conditionValues = Object.values(where).map((value) =>
        typeof value === "string" ? `'${value}'` : value
      );
      conditionKeys.forEach((key, index) => {
        conditions += `${key} = ${conditionValues[index]}${
          index === conditionKeys.length - 1 ? "" : " AND "
        }`;
      });
    }
    let query = `SELECT ${columns ? columns.join() : "*"} FROM ${table}`;
    if (conditions) query += ` WHERE ${conditions}`;
    return query;
  },
  innerJoin: (table, pivot, pk, fk, fk_pivot, id, select = []) => {
    // SELECT * FROM table sc INNER JOIN table2 s ON s.id = sc.fk WHERE sc.pk = id

    const selection = select.length
      ? select.map((s) => `s.${s}`).join(",")
      : "*";

    return `SELECT ${selection}
      FROM ${pivot} sc
      INNER JOIN ${table} s ON s.${fk} = sc.${fk_pivot}
      WHERE sc.${pk} = ${id}`;
  },
  update: (table, data, where) => {
    let conditions = "";
    let updater = "";

    if (where) {
      const conditionKeys = Object.keys(where);
      const conditionValues = Object.values(where).map((value) =>
        typeof value === "string" ? `'${value}'` : value
      );
      conditionKeys.forEach((key, index) => {
        conditions += `${key} = ${conditionValues[index]}${
          index === conditionKeys.length - 1 ? "" : " AND "
        }`;
      });
    }

    if (data) {
      const formattedData = Object.entries(data);
      formattedData.forEach(([key, val], index) => {
        updater += `${key} = ${typeof val === "string" ? `'${val}'` : val}${
          index === formattedData.length - 1 ? "" : " , "
        }`;
      });
    }
    let query = `UPDATE ${table} SET ${updater} `;
    if (conditions) query += ` WHERE ${conditions}`;
    return query;
  },
};
