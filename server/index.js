const express = require('express');
const app = express();
const PORT = 3322;

require('./plugin/db')(app);
require('./router/router')(app);
app.listen(PORT, () => {
    console.log(`服务启动成功,端口号${PORT}`);
})