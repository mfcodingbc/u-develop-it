// allows for local machine server creation
const express = require('express');
// Allows connection to MySQL database
const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'My$QLP@55w0rd',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// start the Express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}. Check it out here: http://localhost:3001`);
});