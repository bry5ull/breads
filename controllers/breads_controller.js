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
    res.render('show', {
      bread: Bread[arrayIndex]
    })
})

breads.get('/:arrayIndex', (req, res) => {
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread:Bread[req.params.arrayIndex]
    })
  } else {
    res.send('404')
  }
})

module.exports = router

  

