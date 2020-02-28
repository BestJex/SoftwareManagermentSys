module.exports = app => {
    const express = require('express');
    console.log(new Date().toLocaleString())

    const router = express.Router({
        mergeParams: true
    });

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

    app.use('/api/rest/:resource', async (req, res, next) => {
        console.log(`当前访问的表:`, req.params.resource)
        const nodeName = require('inflection').classify(req.params.resource);
        req.Model = require(`../model/${nodeName}`)
        next();
    }, router);

    router.post('/user/login', (req, res) => {
        const { userName, passWord } = req.body;
        const adminUser = require('../model/User');
        const user = adminUser.findOne({ userName }).select('+passWord');

        if (!user) {
            return res.status(422).send({
                message: '用户不存在'
            })
        }

        const isValid = require('bcrypt').compareSync(passWord, user.passWord);
        if (!isValid) {
            return res.status(422).send({
                message: "密码不正确"
            })
        }

        const jwt = require('jsonwebtoken');
        const token = jwt.sign({
            id: user._id
        }, 'token');
        res.send(token)
    })

    //文件处理中间件
    require('../plugin/fileProcess')(app);

    //excel2xml中间件
    require('../plugin/switch/switch')(app);

}