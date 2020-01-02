module.exports = app => {
    const multer = require('multer');
    const uploadPath = (__dirname + '/../upload');

    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, uploadPath)
        },
        filename: function (req, file, cb) {
            // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
            cb(null, req.body.fileName);
        }
    })
    // 通过 storage 选项来对 上传行为 进行定制化
    var upload = multer({
        storage: storage
    })
    app.post('/api/upload', upload.single('file'), async (req, res) => {
        console.log(req.body.fileName)
        const file = req.file;
        file.url = `http://localhost:3322/upload/${file.filename}`
        console.log(file)
        res.send(file);
    })

    app.delete('/api/deleteFile/:path', (req, res) => {
        res.send('res.send file ')
    })

    // fs.unlink(filePath, (err) => {
    //     if (err) throw err;
    //     console.log('删除成功');
    // })

}