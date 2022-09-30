const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const port = 3000

const api = express();
api.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dromtorp'
})

db.connect(err => {
    if (err) {
        throw err;
    } else {
        return console.log('Connection created.')
    }

})

api.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

api.get('/getElev/:fornavn', (req, res) => {
    var getFornavn = req.params.fornavn;
    let sql = 'SELECT * FROM elev where fornavn LIKE "' + getFornavn + '%"';
    db.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }
        res.json(results);
    });
});