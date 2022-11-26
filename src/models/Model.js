const Connection = require("../database/connection");
module.exports = class Model {
  constructor(table) {
    this.table = table;
    this.db = new Connection();
  }

  async create(data) {
    const sql = QueryBuilder.save(this.table, data);
    return await this.db.query(sql, Object.values(data));
  }

  getOne() {
    return;
  }

  list() {
    return;
  }

  update() {
    return;
  }

  delete() {
    return;
  }
};

const QueryBuilder = {
  save: (table, data) => {
    const values = Object.keys(data)
      .map((i, idx) => `$${idx + 1}`)
      .join(",");
    const keys = Object.keys(data).join(",");
    return `INSERT INTO ${table} (${keys}) VALUES (${values})`;
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
    let update = "";

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
      const dataKey = Object.keys(data);
      dataKey.forEach((key, index) => {
        updater += `${key} = $${index + 1}`;
      });
    }
    let query = `UPDATE ${table} SET ${updater} `;
    if (conditions) query += ` WHERE ${conditions}`;
    return query;
  },
};
