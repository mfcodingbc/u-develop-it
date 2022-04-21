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
);

module.exports = db;