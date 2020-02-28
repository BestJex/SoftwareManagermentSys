module.exports = (app) => {
    app.post('/api/user/login', async (req, res) => {
        const { userName, passWord } = req.body;
        const adminUser = require('../model/User');
        const user = await adminUser.findOne({ userName }).select('+passWord');
        console.log(user)
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

}