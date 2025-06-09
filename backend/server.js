const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const carouselRoutes = require("./routes/carouselRoutes");
const ProductPageRoutes = require("./routes/ProductPageRoutes.js")

const app = express();
app.use(cors());

mongoose.connect("mongodb://localhost:27017/carouselDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB connected"));

app.use("/api/images", carouselRoutes);
app.use('/api/ProductPages', ProductPageRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});

