// 用于操作商品增删查改的模块
const db = require('../api/db');
const apiResult = require('../api/apiResult');
const path = require('path');
const multer = require('multer');

var fs = require('fs');

//设置上传的目录，  
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var _path = path.join(__dirname, "../../img");
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
        app.post('/addproduct',upload.single('proimg'),async (req,res)=>{
            let proname = req.body.proname;
            let proprice = req.body.proprice;
            let pathname = `/img/${req.file.originalname}`;

            let result = await db.insert('products',{proname,proprice,pathname});
            res.send(result);
        })
    }
}

