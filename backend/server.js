// Express + Next JS server combination - server.js
const express = require('express');
const next = require('next');
const mysql = require('mysql2');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.use(express.json());

const server = express();
/*
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yourpassword",
    database: "my_database"
});

db.connect((err) => {
    if (err) {
        console.error("Ошибка подключения к MySQL:", err);
        return;
    }
    console.log("Подключено к MySQL!");
});

server.get("/api/user", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(results);
    });
});
*/
server.get('/*', (req, res) => {
  return handle(req, res);
});

app.prepare().then(() => {
  // Start listening to the Express.js Server
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('Express Server running on http://localhost:3000');
  });
});
