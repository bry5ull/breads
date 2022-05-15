const express = require('express')
const router = express.Router()
const Bread = require('../models/bread.js')

// INDEX
router.get('/', (req, res) => {
    res.render('Index', {
        breads: Bread,
        title: 'Index Page'
      }
    )
  // res.send(Bread)
})


router.get('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    res.send(Bread[arrayIndex])
})

module.exports = router

  

