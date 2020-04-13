const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  downloads: {
    type: String,
    default: 0,
  },
  parent: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "SoftWare",
  },
});

module.exports = mongoose.model("SoftWareInfo", Schema);
