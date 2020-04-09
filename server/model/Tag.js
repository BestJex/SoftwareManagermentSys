const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  tagName: {
    type: String,
  },
  tagFeatures: {
    type: String,
  },
});

module.exports = mongoose.model("Tag", Schema);
