const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 3322;

app.use(
  require("cors")({
    origin: [`http://localhost:8081`, `http://192.168.1.172:8081`],
    credentials: true
  })
);
app.use(express.json());
app.use(
  session({
    key: "key",
    secret: "keyboard cat",
    resave: false,
    httpOnly: false,
    saveUninitialized: true,
    signed: true,
    overwrite: true
  })
);

app.use("/upload", express.static(__dirname + "/upload")); //上传组件
app.use("/api/download/switch", express.static(__dirname + "/plugin/switch")); //转换后的文件下载
app.use("/", express.static(__dirname + "/dist")); //静态文件托管

require("./plugin/db")(app); //db
require("./router/router")(app);
app.listen(PORT, () => {
  console.log(`服务启动成功,端口号${PORT}`);
});
