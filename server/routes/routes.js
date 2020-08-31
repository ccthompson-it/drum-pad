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
  console.log(req.body)
  db.saveBeat({ beat: req.body.beat, beat_name: req.body.beat_name })
    .then(() => {
      res.send(true)
    })
    .catch(e => {
      console.log(e)
    })
})

router.delete('/beats', (req, res) => {
  db.deleteBeat(id)
    .then(() => {
      res.send(true)
    })
    .catch(e => {
      console.log(e)
    })
})

module.exports = router
