var express = require("express")
var app = express()
var cors = require("cors")
var database = require("./config/database")
const { response } = require("express")
var port = process.env.PORT || 3005

// Connect to our database
database.connect(err => {
  if (!err) {
    console.log("Db connect success")
  }
  if (err) {
    console.log("Db losttt")
  }
})

// This is to allow our api for cross-origin resource sharing
app.use(cors())

// This is to allow our api for parsing json
app.use(express.json())

// This is to allow our api to receive data from a client app
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get("/tweets", (req, res) => {
  let sql = `SELECT * FROM users`

  database.query(sql, (err, result) => {
    if (!err) {
      res.send(result)
    }
    if (err) {
      res.status(400).send(err)
      return
    }
  })
})

app.get("/", (req, res) => {
  res.send("Hey World...i will travel you")
})

app.get("/about", (req, res) => {
  res.send("about")
})

app.get("/show", (req, res) => {
  res.send("show")
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
