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

router.post('/beats', (req, res) => {
  db.saveBeat(req.body)
    .then(() => {
      res.send(true)
    })
    .catch(e => {
      console.log(e)
    })
})

router.delete('/beats/:id', (req, res) => {
  db.deleteBeat(req.params.id)
    .then(() => {
      res.send(true)
    })
    .catch(e => {
      console.log(e)
    })
})

module.exports = router
