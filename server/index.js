const express = require('express');
const app = express();
const PORT = 3322;

app.use(require('cors')())
app.use(express.json())
app.use('/upload', express.static(__dirname + '/upload'))
app.use('/', express.static(__dirname + '/dist'))

require('./plugin/db')(app);
require('./router/router')(app);


app.listen(PORT, () => {
    console.log(`服务启动成功,端口号${PORT}`);
})