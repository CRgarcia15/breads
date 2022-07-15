const mongoose = require('mongoose')
const{Schema} = mongoose
const Bread = require('./breads')

const bakerSchema = new Schema ({
    name: {type: String, required: true},
    startDate: {type: Date, required: true},
    bio: String
}, {toJSON: {vituals: true}})

bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

const Baker = mongoose.model('Baker', bakerSchema)

module.exports = Baker