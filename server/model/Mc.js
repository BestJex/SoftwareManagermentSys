const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    versionNumber: {
        type: String
    },
    fileDir: {
        type: String,
    },
    versionFeatures: {
        type: String,
    },
    relatedProject: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Project'
    }],
})


module.exports = mongoose.model('Mc', Schema)