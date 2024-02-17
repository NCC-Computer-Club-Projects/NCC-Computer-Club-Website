require('dotenv').config();
const mysql = require('mysql');

const env = process.env;

const client = mysql.createConnection({
  host     : env.HOST,
  user     : env.DB_USER,
  password : env.DB_PASSWORD,
  database : 'my_db'
});
 
client.connect();
 
client.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
client.end();