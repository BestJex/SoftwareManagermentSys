// 根据博客的标签查找相同标签的博客
module.exports = app => {
  const SoftWare = require("../model/SoftWare");
  app.get("/api/findBlogTag/:id", async (req, res) => {
    const data = await SoftWare.find({
      relatedProject: req.params.id
    }).populate("relatedProject");
    res.send(data);
  });
};
