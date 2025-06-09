const mongoose = require('mongoose')

const ProductPageSchema = new mongoose.Schema({
    title: String,
    price: Number,
    originalPrice: Number,
    discount: String,
    image: String,
})

module.exports = mongoose.model('ProductPage', ProductPageSchema)