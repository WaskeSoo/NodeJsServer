const mongoose = require('mongoose')
const Schema = mongoose.Schema



const GeoSchema = new Schema({
    type:{
        type: String,
        default: "Point"
    },
    coordinates:{
        type:[Number],
        index:"2dsphere"
    }
})

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
    },
    geometry: GeoSchema
})

const Film = mongoose.model('film',filmSchema)

module.exports = Film