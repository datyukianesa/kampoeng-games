const mysql = require("mysql")

const conn = mysql.createConnection({
  host: "mysql-38969-0.cloudclusters.net",
  user: "admin",
  password: "bRZKr7ks",
  database: "dbKgames",
})

module.exports = conn
