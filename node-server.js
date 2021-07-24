const express = require("express")
const gatsby = require("gatsby-plugin-nodejs")
var cors = require("cors")
var db = require("./config/database")

const app = express()

gatsby.prepare({ app }, () => {
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

  // Here you can define your routes
  app.get("/try", (req, res) => {
    res.send("Hey World...i will travel youuuuuuu")
  })

  app.get("/tbl_login", (req, res) => {
    let sql = "SELECT * FROM tbl_login"

    db.query(sql, (err, result) => {
      if (!err) {
        res.send(result)
      }
      if (err) {
        res.status(400).send(err)
        return
      }
    })
  })

  app.get("/homepage", (req, res) => {
    // const homepageText = req.body.homepageText
    const sql = "SELECT homepageText FROM tbl_homepage"

    db.query(sql, (err, result) => {
      if (!err) {
        res.send(result)
      }
    })
  })

  app.get("/team", (req, res) => {
    const sql = "SELECT * FROM tbl_team"

    db.query(sql, (err, result) => {
      if (!err) {
        res.send(result)
      }
    })
  })

  // Insert Homepage Text
  app.post("/api/insert", (req, res) => {
    const homepageText = req.body.homepageText
    const sql = "INSERT INTO tbl_homepage (homepageText) VALUES (?)"

    db.query(sql, [homepageText], (err, result) => {
      if (!err) {
        res.send(result)
      }
    })
  })

  // Update Homepage Text
  app.put("/api/update", (req, res) => {
    const textUpdate = req.body.textUpdate
    const sql = "UPDATE tbl_homepage SET homepageText = ? WHERE id = 1"

    db.query(sql, [textUpdate], (err, result) => {
      if (!err) {
        res.send(result)
      }
    })
  })

  // Delete Team
  app.delete("/api/delete/:teamDelete", (req, res) => {
    const teamDelete = req.params.teamDelete
    const sql = "DELETE FROM tbl_team WHERE id = ?"

    db.query(sql, [teamDelete], (err, result) => {
      if (!err) {
        res.send(result)
      }
    })
  })
})

const port = process.env.PORT || 1337

app.listen(port, () => console.log(`listening on port ${port}`))
