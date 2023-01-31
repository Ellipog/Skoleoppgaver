const mysql = require("mysql");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kurs",
});

app.use(
  cors({
    origin: "*",
  })
);

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/fetchdb", (req, res) => {
  db.query("SELECT * FROM kurs", (err, result) => {
    res.send(JSON.stringify({ data: result }));
  });
});

app.get("/register", (req, res) => {
  const data = req.body;
  console.log(data);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
