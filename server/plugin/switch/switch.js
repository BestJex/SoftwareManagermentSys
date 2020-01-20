//交换机工具，excel2xml和xml2excel

module.exports = app => {
    const multer = require('multer');
    const fs = require('fs');

    var upload = multer({
        dest: __dirname + './temp'
    })
    app.post('/api/excel2xml', upload.single('file'), async (req, res) => {
        const file = req.file;
        file.url = `http://localhost:3322/upload/${file.filename}`
        file.fileName = file.filename;
        console.log(file)
        res.send(file);
    })

    app.delete('/api/deleteFile/:path', (req, res) => {
        res.send('res.send file ')

        fs.unlink(`${uploadPath}/${req.params.path}`, (err) => {
            if (err) {
                console.log(err);
            }
            console.log('删除成功');
        })
    })


}