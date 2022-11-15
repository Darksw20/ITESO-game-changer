const Connection = require("./connection");
const normalizedPath = require("path").join(__dirname, "migrations");

const db = new Connection();

const addMigration = async (name) => {
  return new Promise(async (resolve, reject) => {
    console.log("Added migration: ", name);
    const addMigrationsQuery = await db.query(
      `INSERT INTO MIGRATIONS(name) VALUES (?)`,
      [name]
    );
    console.log(addMigrationsQuery);
    resolve(addMigrationsQuery);
  });
};

const init = () => {
  return new Promise(async (resolve, reject) => {
    const isInitialized = await db.query("SHOW TABLES LIKE 'MIGRATIONS'");
    if (!isInitialized.length > 0) {
      //init the db
      const initDB = await db.query(`CREATE TABLE MIGRATIONS(
              id INT NOT NULL AUTO_INCREMENT,
              name VARCHAR(255),
              timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
              PRIMARY KEY (id)
          )`);
    }

    const migrationsQuery = await db.query(`SELECT name FROM MIGRATIONS`);

    const migrations = migrationsQuery.map((row) => {
      return `${row.name}.js`;
    });

    require("fs")
      .readdirSync(normalizedPath)
      .forEach((file) => {
        if (!migrations.includes(file)) {
          const [migrationName] = file.split(".");
          addMigration(migrationName);
          require("./migrations/" + file);
        }
      });

    resolve(!isInitialized.length > 0);
  });
};

const migrationProcess = init();

migrationProcess.then((result) => {
  console.log("Finished Migrations");
  process.exit();
});
