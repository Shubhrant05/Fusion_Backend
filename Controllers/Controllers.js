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
const getBog = (request, response, next) => {
    client.query(`SELECT * FROM administration WHERE 'Board of governers' = ANY ("committee")`, (error, results) => {
      if (error) {
        console.log(error)
      }
      console.log(response,"response")
      response.status(200).json(results)
    })
  }

const getfinance = (request, response, next) => {
    client.query(`SELECT * FROM administration WHERE 'Finance Committee' = ANY ("committee")`, (error, results) => {
      if (error) {
        console.log(error)
      }
      console.log(response,"response")
      response.status(200).json(results)
    })
}

const getGad = (request, response, next) => {
    client.query(`SELECT * FROM administration WHERE 'General Administration' = ANY ("committee")`, (error, results) => {
      if (error) {
        console.log(error)
      }
      console.log(response,"response")
      response.status(200).json(results)
    })
}

const getOad = (request, response, next) => {
  client.query(`SELECT * FROM administration WHERE 'Other Administration' = ANY ("committee")`, (error, results) => {
    if (error) {
      console.log(error)
    }
    console.log(response,"response")
    response.status(200).json(results)
  })
}

const getBWC = (request, response, next) => {
  client.query(`SELECT * FROM administration WHERE 'Building works committee' = ANY ("committee")`, (error, results) => {
    if (error) {
      console.log(error)
    }
    console.log(response,"response")
    response.status(200).json(results)
  })
}

  module.exports = {
    getBog,
    getfinance,
    getGad,
    getOad,
    getBWC,
  }