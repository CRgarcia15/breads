const express = require('express')
const breads = express.Router()
const Bread = require('../models/breads.js')

breads.get('/', (req, res) => {
    Bread.find()
      .then(foundBreads => {
        res.render('index',
        {
            breads: foundBreads,
            title: 'Index Page'
        })
      })
})

breads.get('/new', (req, res) => {
    res.render('new')
})

// create
breads.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = undefined
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
})
  
//delete
breads.delete('/:id', (req, res) => {
  Bread.findByIdAndDelete(req.params.id)
    .then(deleteBread => {
      res.status(303).redirect('/breads')
    })
})

// UPDATE
breads.put('/:id', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(updateBread => {
      console.log(updateBread)
    res.redirect(`/breads/${req.params.id}`)
    })
})

//edit
breads.get('/:id/edit', (req, res) => {
  Bread.findById(req.params.id)
  .then(foundBread => {
      res.render('edit', {
          bread: foundBread
      })
  })
  .catch(err => {
    res.send('404')
  })
})

breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .then(foundBread => {
         const bakedBy = foundBread.getBakedBy()
         console.log(bakedBy)
         res.render('show', {
          bread: foundBread
         })
          })
      .catch(err => {
        res.send('404')
      })
})

module.exports = breads