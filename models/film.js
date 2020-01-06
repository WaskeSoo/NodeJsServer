const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Stworz film schema i model
const filmSchema = new Schema({
    name: {
    type: String,
    required:[true,'Name field is required']
    },
    price:{
        type: Number
    },
    available:{
        type: Boolean,
        default: false
    }
    //dodac do geo lokal
})

const Film = mongoose.model('film',filmSchema)

module.exports = Film