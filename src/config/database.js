const config = {
    username: 'root',
    password: '',
    database: 'api-node',
    host: 'localhost',
    dialect: 'mysql' 
  }
  
  module.exports = config;



  const Pool = require('pg').Pool
  const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sistema',
  password: 'root',
  port: 5432,
})