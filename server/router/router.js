module.exports = (app) => {
  const express = require("express");
  const assert = require("http-assert");
  console.log(new Date().toLocaleString());

  const router = express.Router({
    mergeParams: true,
  });

  const authMiddleware = require("../midware/Autho");
  const resourceMiddleware = require("../midware/resource");

  router.post("/", async (req, res) => {
    const model = await req.Model.create(req.body);
    console.log(`创建数据`, req.body);
    console.log(model);
    res.send(model);
  });

  router.get("/", async (req, res) => {
    const item = await req.Model.find().populate("relatedTag");
    console.log(`获取 ${req.params.resource}列表`);
    res.send(item);
  });

  router.get("/:id", async (req, res) => {
    const item = await req.Model.findById(req.params.id).populate("relatedTag");
    console.log(`查找 ${req.params.id}`);
    console.log(item);
    res.send(item);
  });

  router.put("/:id", async (req, res) => {
    const item = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    console.log(`查找 ${req.params.id}`);
    console.log(item);
    res.send(item);
  });

  router.delete("/:id", async (req, res) => {
    console.log(req.params.id);
    const data = await req.Model.findByIdAndDelete(req.params.id);
    console.log(`删除 ${req.params.resource} 中的 ${data}`);
    res.send(data);
  });

  app.use(
    "/api/rest/:resource",
    authMiddleware(),
    resourceMiddleware(),
    router
  );

  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message,
    });
  });
  //文件处理中间件
  require("../plugin/fileProcess")(app);
  // //svg验证
  require("../plugin/svgCaptcha")(app);
  //用户登陆
  require("../plugin/user")(app);
  //excel2xml中间件
  require("../plugin/switch/switch")(app);
  //根据博客的标签去查找带有同样标签的博客
  require("../plugin/findBlogTag")(app);
  //搜索
  require("../plugin/search")(app);
  //热门下载
  require("../plugin/softWareInfo")(app);
};
