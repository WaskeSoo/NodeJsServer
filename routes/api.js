const express = require('express')
const router = express.Router()
const Film = require('../models/film')

//lista filmow z db
router.get('/filmy',function(req,res,next){
res.send({type: 'GET'})
})

//Dodaj filmy do db
router.post('/filmy',function(req,res,next){
Film.create(req.body).then(function(film){
    res.send(film)
}).catch(next)
})

//Aktualizuj filmy w db
router.put('/filmy/:id',function(req,res,next){
    res.send({type: 'PUT'})
})

//Usuwanie filmu z db
router.get('/filmy/:id',function(req,res,next){
    Film.findOneAndDelete({_id: req.params.id}).then(function(film){
        res.send(film)
    })
})

module.exports = router