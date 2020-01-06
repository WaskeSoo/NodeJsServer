const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()


//Połacz do mongodb
mongoose.connect('mongodb+srv://admin:Password@cluster0-etsxy.mongodb.net/test?retryWrites=true&w=majority',{ useUnifiedTopology: true,useNewUrlParser: true })



app.use(bodyParser.json())

//Inicjacja routes
app.use('/api',require('./routes/api'))


//error handler

app.use(function(err,req,res,next){
   //console.log(err)
   res.status(422).send({error:err.message
   })
})



app.listen(process.env.port||3000,function(){
console.log('now listening for request')
})