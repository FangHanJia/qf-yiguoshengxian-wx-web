// 服务器的主入口文件
const path = require('path');
const express = require('express');
const bp = require('body-parser');

const app = express();

// 跨域处理
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, auth, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") {
      res.send(200);/*让options请求快速返回*/
    } else{
      next();
    }
});

// 全局使用
app.use(bp.urlencoded({extended:false}));

// 引入功能路由
const user = require('./user');
user.account(app);

const product = require('./product');
product.product(app);

// 暴露模块
module.exports = {
    start(_port = 88){
        app.listen(_port);
    }
}