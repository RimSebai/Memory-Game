const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "memory_game",
});

connection.connect();

const createPlayer = async function(playerData) {
  try {
    return await connection.query(`insert into players set ? `, playerData);
  } catch (err) {
    connection.end();
    return error;
  }
};
const getAllPlayer = async function() {
  try {
    await connection.query(`select player from players`, (err, row) => {});
  } catch (err) {
    connection.end();
    return error;
  }
};

module.exports = { createPlayer, getAllPlayer };
