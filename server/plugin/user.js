module.exports = app => {
  const adminUser = require("../model/User");

  app.post("/api/user/login", async (req, res) => {
    const { userName, passWord, code } = req.body;
    const user = await adminUser.findOne({ userName }).select("+passWord");

    if (code.toLocaleLowerCase() !== req.session.captcha) {
      return res.status(422).send({
        message: "验证码不正确"
      });
    }

    if (!user) {
      return res.status(422).send({
        message: "用户不存在"
      });
    }

    const isValid = require("bcrypt").compareSync(passWord, user.passWord);
    if (!isValid) {
      return res.status(422).send({
        message: "密码不正确"
      });
    }

    const jwt = require("jsonwebtoken");
    const token = jwt.sign(
      {
        id: user._id
      },
      "token"
    );
    res.send(token);
  });
};
