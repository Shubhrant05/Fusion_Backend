// write controller function in this file

const pg = require('pg')
const client = new pg.Client({
  user: 'fusion_admin',
  host: 'localhost',
  database: 'institute_website',
  password: 'hello123',
  port: 5432,
})
try {
  client.connect()
} catch (error) {
  console.log("Client not connect",error)
}
const getUsers = (request, response, next) => {
    client.query('SELECT * FROM administration', (error, results) => {
      if (error) {
        console.log(error)
      }
      console.log(response,"response")
      response.status(200).json(results)
    })
  }

  module.exports = {
    getUsers,
  }