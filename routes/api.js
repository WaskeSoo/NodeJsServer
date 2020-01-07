const express = require('express')
const router = express.Router()
const Film = require('../models/film')

//lista filmow z db
router.get('/filmy',function(req,res,next){
// Film.find({}).then(function(film){
//     res.send(film)
// })
Film.aggregate().near({
    near:{
    type: 'Point',
    coordinates: [parseFloat(req.query.Ing), parseFloat(req.query.lat)]},
    maxDistance: 300000,
    spherical: true,
    distanceField: "dis"
   }).then(function(filmy){
       res.send(filmy)
   })
})

//Dodaj filmy do db
router.post('/filmy',function(req,res,next){
Film.create(req.body).then(function(film){
    res.send(film)
}).catch(next)
})

//Aktualizuj filmy w db
router.put('/filmy/:id',function(req,res,next){
    Film.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        Film.findOne({_id: req.params.id}).then(function(film){
         res.send(film)   
        })
        
    })
        
})

//Usuwanie filmu z db
router.delete('/filmy/:id',function(req,res,next){
    Film.findByIdAndRemove({_id: req.params.id}).then(function(film){
        res.send(film)
    })
})

module.exports = router