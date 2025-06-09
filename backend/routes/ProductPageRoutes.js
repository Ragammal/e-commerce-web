const express = require('express');
const router = express.Router();
const ProductPage = require('../models/ProductPageModels')

router.get('/', async (req, res) => {
    try{
        const ProductPages = await ProductPage.find();
        res.json(ProductPages);
    }
    catch (err) {
        res.status(500).json({ message: err.message})
    }
})

module.exports = router;