const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const connection = require('knex')(config)

module.exports = {
  getBeats,
  saveBeat,
  deleteBeat
}

function getBeats(db = connection) {
  return db('beats').select()
}

function saveBeat(beat, db = connection) {
  return db('beats').insert(beat)
}

function deleteBeat(id, db = connection) {
  return db('beats').delete().where('id', id)
}