module.exports = (app) => {
  app.post("/api/softWareInfo/:id", async (req, res) => {
    const softWareInfo = require("../model/SoftWareInfo");
    //去数据里找有没有这条数据
    const softWareFindRes = await softWareInfo.find({ parent: req.params.id });
    if (softWareFindRes.length !== 0) {
      //有就把下载数更新下
      var newDownloads = softWareFindRes[0].downloads;
      let data = await softWareInfo.findOneAndUpdate(
        { parent: req.params.id },
        { downloads: ++newDownloads }
      );
      console.log(data);
    } else {
      // 没有就创建一个
      await softWareInfo.create({ downloads: 1, parent: req.params.id });
    }
  });
};
