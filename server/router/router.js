module.exports = app => {
    const express = require('express');
    const router = express.Router({
        mergeParams: true
    });

    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body);
        console.log(`创建数据${req.body}`)
        res.send(model);
    })

    router.get('/', async (req, res) => {
        const item = await req.Model.find();
        console.log(`获取${req.params.resource}列表`);
        res.send(item)
    })

    router.delete('/', async (req, res) => {
        const data = await req.Model.findOneAndRemove(req.params.resource);
        console.log(`删除${req.params.resource}中的${data}`);
        res.send(data);
    })

    app.use('/api/rest/:resource', async (req, res, next) => {
        const nodeName = require('inflection').classify(req.params.resource);
        req.Model = require(`../model/${nodeName}`)
        next();
    }, router);

    const multer = require('multer');
    const upload = multer({
        dest: __dirname + '/../upload'
    })

    app.post('/api/upload', upload.single('file'), async (req, res) => {
        const file = req.file;
        file.url = 'http://localhost:3322/upload/${file.name}'
        console.log(file)
        res.send(file);
    })
}