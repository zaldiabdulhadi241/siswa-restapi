const mysql = require("mysql");

// buat koneksi ke database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbrestapi",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Mysql Connected");
});

module.exports = connection;
