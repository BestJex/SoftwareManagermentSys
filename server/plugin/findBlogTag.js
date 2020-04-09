// 根据博客的标签查找相同标签的软件
module.exports = (app) => {
  const SoftWare = require("../model/SoftWare");
  app.get("/api/findBlogTag/:id", async (req, res) => {
    const data = await SoftWare.find({
      relatedTag: req.params.id,
    }).populate("relatedTag");
    res.send(data);
  });
};
