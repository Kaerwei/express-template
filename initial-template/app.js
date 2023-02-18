const express = require('express');
const app = express();

app.get('/', function (req, res) {
    // console.log(req);
    res.send({ state: 200, message: '成功访问!' });
})

app.listen(3000, () => {
    console.log('开启3000端口!');
})