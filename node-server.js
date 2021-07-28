const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./database");
const port = 1337;

app.get("/", (req, res) => {
  res.send("Hello yoi mamen mamen!");
});

// This is to allow our api for cross-origin resource sharing
app.use(cors());

// This is to allow our api for parsing json
app.use(express.json());

// This is to allow our api to receive data from a client app
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Here you can define your routes
app.get("/try", (req, res) => {
  res.send("Hey World...i will travel youuuuuuu");
});

app.get("/tbl_login", (req, res) => {
  let sql = "SELECT * FROM tbl_login";

  db.query(sql, (err, result) => {
    if (!err) {
      res.send(result);
    }
    if (err) {
      res.status(400).send(err);
      return;
    }
  });
});

app.get("/homepage", (req, res) => {
  // const homepageText = req.body.homepageText
  const sql = "SELECT homepageText FROM tbl_homepage";

  db.query(sql, (err, result) => {
    if (!err) {
      res.send(result);
    }
  });
});

// Insert Homepage Text
app.post("/api/insert", (req, res) => {
  const homepageText = req.body.homepageText;
  const sql = "INSERT INTO tbl_homepage (homepageText) VALUES (?)";

  db.query(sql, [homepageText], (err, result) => {
    if (!err) {
      res.send(result);
    }
  });
});
app.post("/api/insert/team", (req, res) => {
  const teamInsertUser = req.body.teamInsertUser;
  const teamInsertPass = req.body.teamInsertPass;
  const teamInsertNim = req.body.teamInsertNim;
  console.log(teamInsertUser);
  console.log(teamInsertPass);
  console.log(teamInsertNim);
  const sql = "INSERT INTO tbl_team (name, title, nim) VALUES (?, ?, ?)";

  db.query(
    sql,
    [teamInsertUser, teamInsertPass, teamInsertNim],
    (err, result) => {
      if (!err) {
        res.send(result);
      }
    }
  );
});

// All UPDATE
app.put("/api/update", (req, res) => {
  const textUpdate = req.body.textUpdate;
  const sql = "UPDATE tbl_homepage SET homepageText = ? WHERE id = 1";

  db.query(sql, [textUpdate], (err, result) => {
    if (!err) {
      res.send(result);
    }
  });
});

// app.put("/api/update/team", (req, res) => {
//   const sql = "UPDATE tbl_team SET name = ?, title = ?, nim = ? WHERE id = ?"
// })

// Fetch all Team data
app.get("/team", (req, res) => {
  const sql = "SELECT * FROM tbl_team";

  db.query(sql, (err, result) => {
    if (!err) {
      res.send(result);
    }
  });
});

// Delete Team
app.delete("/api/delete/:teamDelete", (req, res) => {
  const teamDelete = req.params.teamDelete;
  const sql = "DELETE FROM tbl_team WHERE id = ?";

  db.query(sql, [teamDelete], (err, result) => {
    if (!err) {
      res.send(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
