const express = require('express')

const db = require('../db')

const router = express.Router()


router.get('/beats', (req, res) => {
  db.getBeats()
    .then(beats => {
      res.json(beats)
    })
    .catch(e => {
      console.log(e)
    })
})

module.exports = router
