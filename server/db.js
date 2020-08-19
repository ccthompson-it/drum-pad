const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const connection = require('knex')(config)

module.exports = {
  getBeats
}

function getBeats(db = connection) {
  return db('beats').select()
}
