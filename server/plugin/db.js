module.exports = app => {
    const mongoose = require('mongoose');
    mongoose.connect(`mongodb://127.0.0.1:27017/backEnd-man-sys`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, data) => {
        if (err) throw err;
        console.log(`数据库启动成功,端口号${data.port}`)
    })
}