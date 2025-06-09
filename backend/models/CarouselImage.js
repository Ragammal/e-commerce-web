const mongoose = require("mongoose");

const CarouselImageSchema = new mongoose.Schema({
  url: String
});

module.exports = mongoose.model("CarouselImage", CarouselImageSchema);
