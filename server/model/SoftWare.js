const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  versionNumber: {
    type: String,
  },
  fileDir: {
    type: String,
  },
  fileName: {
    type: String,
  },
  versionType: {
    type: String,
  },
  versionFeatures: {
    type: String,
  },
  relatedProject: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Tag",
    },
  ],
  createTime: {
    type: String,
    default: () => {
      return new Date().toLocaleString();
    },
  },
  upDateTime: {
    type: String,
    default: () => {
      return new Date().toLocaleString();
    },
  },
});

module.exports = mongoose.model("Mc", Schema);
