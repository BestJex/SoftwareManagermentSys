module.exports = (app) => {
  const softWareInfo = require("../model/SoftWareInfo");
  app.post("/api/softWareInfo/:id", async (req, res) => {
    //去数据里找有没有这条数据
    const softWareFindRes = await softWareInfo.find({ parent: req.params.id });
    console.log(`用户下载了 ${req.params.id}`);
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
    res.status(200).send({ message: "记录完成" });
  });

  app.delete("/api/softWareInfo/:id", async (req, res) => {
    const softWareFindRes = await softWareInfo.find({ parent: req.params.id });
    if (softWareFindRes.length !== 0) {
      await softWareInfo.findOneAndRemove({ parent: req.params.id });
      console.log(`删除 ${req.params.id} 的下载信息成功`);
    } else {
      console.log(`删除 ${req.params.id} 的下载信息失败`); //没有记录过下载信息的话也会失败。没找到就算了
    }

    res.status(200).send({ message: "删除完成" });
  });
};
