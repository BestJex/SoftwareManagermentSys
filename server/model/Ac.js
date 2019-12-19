const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    versionNumber: {
        type: Number
    },
    relatedProject: {
        type: String,
    },
    fileDir: {
        type: String,
    },
    versionFeatures: {
        type: String,
    }

})

module.exports = mongoose.model('ac', Schema);