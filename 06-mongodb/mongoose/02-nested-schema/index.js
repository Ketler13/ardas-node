const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  type: {
    type: String,
    require: true,
    enum: ["poster", "logo"]
  }
});

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Укажите название",
      unique: true
    },
    images: [imageSchema]
  },
  {
    timestamps: true
  }
);

const seriesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Укажите название",
      unique: true
    },
    images: [imageSchema]
  },
  {
    timestamps: true
  }
);
