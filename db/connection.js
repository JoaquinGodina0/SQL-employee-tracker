const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'8261Shep!',
  database: 'employee'
});

module.exports = connection;
