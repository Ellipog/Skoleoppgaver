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
  const { Fornavn, Etternavn, Adresse, Postnummer, Poststed } = req.query;
  db.query(
  `INSERT INTO deltaker (Fornavn, Etternavn, Adresse, Postnummer, Poststed)
  VALUES (?, ?, ?, ?, ?)`,
  [Fornavn, Etternavn, Adresse, Postnummer, Poststed],
  (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error inserting into database");
      return;
    }
    res.status(201).send("Registration successful");
  }
);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
