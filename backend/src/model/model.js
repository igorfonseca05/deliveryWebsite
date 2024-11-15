
const mongoose = require('mongoose')

const dishSchema = new mongoose.Schema({
    category: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: String,
    quantity: Number
}, { strict: false })

const dishModel = mongoose.model('dishModel', dishSchema)

module.exports = dishModel