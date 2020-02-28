const mongoose = require('mongoose');

const Shcema = new mongoose.Schema({
    userName: {
        type: String
    },
    passWord: {
        type: String,
        select: false,
        set(val) {
            return require('bcrypt').hashSync(val, 10);
        }
    }
})

module.exports = mongoose.model('User', Shcema)