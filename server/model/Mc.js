const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    versionNumber: {
        type: String
    },
    fileDir: {
        type: String,
    },
    fileName: {
        type: String
    },
    versionFeatures: {
        type: String,
    },
    relatedProject: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Project'
    }]
}, {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
})


module.exports = mongoose.model('Mc', Schema)