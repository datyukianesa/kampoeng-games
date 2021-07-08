const mysql = require("mysql")

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "express-api",
})

module.exports = conn
