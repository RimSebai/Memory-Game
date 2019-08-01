const mysql = require("mysql");
const util = require("util");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "new_world",
});

const execQuery = util.promisify(connection.query.bind(connection));

async function createData() {
  let sql = "CREATE DATABASE IF NOT EXISTS memory_game";
  let use_sql = "USE memory_game";
  let players =
    "create table players (player varchar(50) NOT NULL, email varchar(50),result ENUM('loser','winner') NOT NULL,date DATE,Id INT NOT NULL PRIMARY KEY";
  connection.connect();
  try {
    await execQuery(sql);
    await execQuery(use_sql);
    await execQuery(players);
  } catch (error) {
    throw error;
  }
  connection.end();
}

createData();
