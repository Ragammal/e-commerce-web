const express = require("express");
const router = express.Router();
const CarouselImage = require("../models/CarouselImage");

// GET /api/images
router.get("/", async (req, res) => {
  try {
    const images = await CarouselImage.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
