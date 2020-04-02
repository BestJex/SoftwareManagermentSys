//交换机工具，excel2xml和xml2excel

module.exports = app => {
  const multer = require("multer");
  const fs = require("fs");
  const readExcel = require("./readExcel");
  const excel2XML = require("./excel2XML");

  const uploadPath = __dirname + "/./temp";
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadPath);
    },
    filename: function(req, file, cb) {
      // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
      cb(null, req.body.fileName);
    }
  });
  // 通过 storage 选项来对 上传行为 进行定制化
  var upload = multer({
    storage: storage
  });
  app.post("/api/excel2xml", upload.single("file"), async (req, res) => {
    console.log(req.body.fileName);
    const file = req.file;
    const excelData = readExcel(file.path); //读取excel
    const XMLPath = excel2XML(excelData); //解析excel生成xml
    if (XMLPath.errMsg) {
      res.status(422).send(XMLPath.errMsg);
    } else {
      file.XMLPath = XMLPath;
      res.send(file);
    }
  });

  app.delete("/api/deleteFile/:path", (req, res) => {
    res.send("res.send file ");

    fs.unlink(`${uploadPath}/${req.params.path}`, err => {
      if (err) {
        console.log(err);
      }
      console.log("删除成功");
    });
  });
};
