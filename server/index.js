const express = require('express');
const app = express();
const PORT = 3322;

app.use(require('cors')())
app.use(express.json())
app.use('/upload', express.static(__dirname + '/upload'))

require('./plugin/db')(app);
require('./router/router')(app);

app.get('/', (req, res) => {
    res.send('<h1 style="font-size:500px; color:red">测试<h1>')
})

app.listen(PORT, () => {
    console.log(`服务启动成功,端口号${PORT}`);
})