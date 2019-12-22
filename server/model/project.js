const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    projectName: {
        type: String
    },
    projectFeatures: {
        type: String
    }
})

module.exports = mongoose.model('Project', Schema)