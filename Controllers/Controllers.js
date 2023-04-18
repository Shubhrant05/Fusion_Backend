// write controller function in this file 

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'institute_website',
  password: 'password',
  port: 5000,
})

//get all users
const getUsers = (request, response, next) => {
    pool.query('SELECT * FROM Administration', (error, results) => {
      if (error) {
        console.log(error)
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getUsers,
  }