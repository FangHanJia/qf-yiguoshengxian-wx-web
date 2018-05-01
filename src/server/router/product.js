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
            let content = req.body.content;
            let intro = req.body.intro;
            let sale = req.body.sale;
            let price = req.body.price;
            let qtycont = req.body.qtycont;
            console.log(intro);
            let img = `/img/${req.file.originalname}`;
            let result = await db.insert('products',{content,intro,sale,qtycont,price,img});
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
        })
    }
}

