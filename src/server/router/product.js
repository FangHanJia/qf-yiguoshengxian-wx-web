// 用于操作商品增删查改的模块
const db = require('../api/db');
const apiResult = require('../api/apiResult');
const path = require('path');
const multer = require('multer');

var fs = require('fs');

//设置上传的目录，  
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var _path = path.join(__dirname, "../../components/img/");
        if(!fs.existsSync(_path)){
            fs.mkdirSync(_path);
        }
        cb(null, _path);    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        cb(null, file.originalname);  
    }
});
// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage });

// 暴露模块
module.exports = {
    product(app){
        // 上传商品
        app.post('/addproduct',upload.single('proimg'),async (req,res)=>{
            let id = Number(req.body.id);
            let content = req.body.content;
            let intro = req.body.intro;
            let sale = req.body.sale;
            let price = req.body.price;
            let qtycont = req.body.qtycont;
            let type = req.body.type;
            let img = `src/components/img/${req.file.originalname}`;
            let result = await db.insert('products',{id,content,intro,sale,qtycont,price,img,type});
            res.send(result);
        });
        // 获取商品
        app.get('/getproduct',async (req,res)=>{
            let result = await db.select('products');
            res.send(result);
        });
        // 删除商品
        app.post('/delproduct',async (req,res)=>{
            let id = req.body.id;
            id = Number(id);
            let result = await db.delete('products',{id});
            res.send(result);
        });
        // 修改商品
        app.post('/updateproduct',async (req,res)=>{
            // 获取id及要修改的数据
            var id = Number(req.body.id);
            var img = req.body.img;
            var content = req.body.content;
            var intro = req.body.intro;
            var sale = req.body.sale;
            var qtycont = req.body.qtycont;
            var price = req.body.price;
            var type = req.body.type;
            var changeObj = {img,content,intro,sale,price,qtycont,type};

            // 调用数据库模块
            var result = await db.update('products',{id},changeObj);
            res.send(result);
        });
        // 用户添加商品到购物车的关联集合
        app.post('/addToCart',async (req,res)=>{
            // 获取用户信息和用户购物车数据
            let username = req.body.username;
            let goodslist = req.body.goodslist;

            // 调用数据库模块
            let result = await db.insert(username,{goodslist});

            res.send(result);

        })
    }
}

