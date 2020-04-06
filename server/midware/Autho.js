module.exports = (app) => {
    return async (req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop();
        const jwt = require('jsonwebtoken');
        const AdminUser = require('../model/User');
        const assert = require('http-assert');
        assert(token, 401, "请先登陆") //无token
        const {
            id
        } = jwt.verify(token, 'token')
        assert(id, 401, '请先登陆') //无效的token
        req.user = await AdminUser.findById(id)
        assert(req.user, 401, "请先登陆")
        await next();
    }
}

