module.exports = app => {
    const express = require('express');
    const assert = require('http-assert');
    console.log(new Date().toLocaleString())

    const router = express.Router({
        mergeParams: true
    });

    const authMiddleware = require('../plugin/Autho');

    router.post('/', async (req, res) => {
        const model = await req.Model.create(req.body);
        console.log(`创建数据`, req.body)
        console.log(model)
        res.send(model);
    })

    router.get('/', async (req, res) => {
        const item = await req.Model.find()
        console.log(`获取 ${req.params.resource}列表`);
        res.send(item)
    })

    router.get('/:id', async (req, res) => {
        const item = await req.Model.findById(req.params.id).populate('relatedProject');
        console.log(`查找 ${req.params.id}`);
        console.log(item)
        res.send(item)
    })

    router.put('/:id', async (req, res) => {
        const item = await req.Model.findByIdAndUpdate(req.params.id, req.body);
        console.log(`查找 ${req.params.id}`);
        console.log(item)
        res.send(item)
    })

    router.delete('/:id', async (req, res) => {
        console.log(req.params.id)
        const data = await req.Model.findByIdAndDelete(req.params.id);
        console.log(`删除 ${req.params.resource} 中的 ${data}`);
        res.send(data);
    })

    app.use('/api/rest/:resource', authMiddleware(), async (req, res, next) => {
        console.log(`当前访问的表:`, req.params.resource)
        const nodeName = require('inflection').classify(req.params.resource);
        req.Model = require(`../model/${nodeName}`)
        next();
    }, router);

    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })


    //文件处理中间件
    require('../plugin/fileProcess')(app);
    //用户登陆
    require('../plugin/user')(app);
    //excel2xml中间件
    require('../plugin/switch/switch')(app);

}