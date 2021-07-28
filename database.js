const mysql = require("mysql")

const conn = mysql.createConnection({
  host: "remotemysql.com",
  user: "kB8TuMw6mo",
  password: "UY6oskpoHt",
  database: "kB8TuMw6mo",
})

module.exports = conn
