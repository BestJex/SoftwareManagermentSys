module.exports = app => {
    const express = require('express');
    const router = express.Router({
        mergeParams: true
    });

    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body);
        console.log(`创建数据`, req.body)
        res.send(model);
    })

    router.get('/', async (req, res) => {
        const item = await req.Model.find().populate('relatedProject');
        console.log(`获取 ${req.params.resource}列表`);
        res.send(item)
    })

    router.get('/:id', async (req, res) => {
        const item = await req.Model.findById(req.params.id)
        console.log(`查找 ${req.params.id}`);
        res.send(item)
    })

    router.put('/:id', async (req, res) => {
        const item = await req.Model.findByIdAndUpdate(req.params.id, req.body);
        console.log(`查找 ${req.params.id}`);
        res.send(item)
    })

    router.delete('/:id', async (req, res) => {
        const data = await req.Model.findOneAndRemove(req.params.id);
        console.log(`删除 ${req.params.resource} 中的 ${data}`);
        res.send(data);
    })

    app.use('/api/rest/:resource', async (req, res, next) => {
        console.log(`当前访问的表:`, req.params.resource)
        const nodeName = require('inflection').classify(req.params.resource);
        req.Model = require(`../model/${nodeName}`)
        next();
    }, router);


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
}