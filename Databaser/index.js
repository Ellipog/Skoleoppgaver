const express = require('express');
const mysql = require('mysql');

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

const app = express();
app.listen('3000', () => {
    console.log('Server started on port 3000')
})
app.get('/insertelev', (req, res) => {
    let post = { ElevID: '11', Fornavn: 'Trygve', Etternavn: 'Melvold', Klasse: '2', Hobby: 'Gaming', Kjonn: 'G', Datamaskin: '2' }
    let sql = 'INSERT INTO elev SET ?'
    let query = db.query(sql, post, err => {
        if (err) {
            throw err;
        }
        res.send('En ny elev har blitt adda')
    })
})

app.get('/updatehobby', (req, res) => {
    let post = { hobby: 'Golf' }
    let sql = 'UPDATE elev SET ? WHERE ElevID = 1'
    let query = db.query(sql, post, err => {
        if (err) {
            throw err;
        }
        res.send('Hobby Updated')
    })
})

app.get('/slettelev', (req, res) => {
    let post = {}
    let sql = 'DELETE FROM elev WHERE ElevID = 11'
    let query = db.query(sql, post, err => {
        if (err) {
            throw err;
        }
        res.send('En elev har blitt slettet')
    })
})