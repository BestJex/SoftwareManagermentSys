module.exports = (app) => {
  const SoftWare = require("../model/SoftWare");
  app.get("/api/search/:id", async (req, res) => {
    console.log(("search:", req.params.id));
    const data = await SoftWare.find({
      versionNumber: { $regex: req.params.id, $options: "i" },
    });
    res.send(data);
  });
};
