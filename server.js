// server.js (Node.js)

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Create a database connection
const db = new sqlite3.Database('hackweb.db');

// Create user and file tables
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT)');
    db.run('CREATE TABLE IF NOT EXISTS files (id INTEGER PRIMARY KEY, userId INTEGER, filename TEXT, encryptedContent TEXT)');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('hackweb'));

// Your remaining server-side logic goes here...

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
