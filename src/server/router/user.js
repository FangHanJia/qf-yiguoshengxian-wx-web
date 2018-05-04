// 操作用户登陆注册的模块
const db = require('../api/db');
const apiResult = require('../api/apiResult');
const jwt = require('jsonwebtoken');

// 判断用户是否已登陆
let filter = function(req,res,next){
    // 获取前端的token
    let token = req.headers['auth'];
    if(!token){
        res.send(apiResult(false,{},'unauth'));
    }else{
        jwt.verify(token,'1234',(error,result)=>{
            if(error){
                res.send(apiResult(false,{},'unauth'));
            }else{
                next();
            }
        })
    }
}
module.exports = {
    account(app){
        // 注册
        app.post('/register',async (req,res)=>{
            // 获取用户数据
            let username = req.body.username;
            let password = req.body.password;

            // 用户地址：null
            let address = '';
            let receiver = '';
            let province = '';
            let city = '';
            let  region = '';

            // 调用数据库模块
            // 注册之前先查询是否存在
            let result = await db.select('user',{username});
            if(result.status){
                res.send(apiResult(false));
            }else{
                let result = await db.insert('user',{username,password,address,receiver,province,city,region});
                res.send(result);
            }
        });

        // 登陆
        app.post('/login',async (req,res)=>{
            // 获取用户名
            let username = req.body.username;
            let password = req.body.password;
            console.log(username);
            let result = await db.select('user',{username,password});

            // 如果用户存在则设置token
            if(result.status){
                let token = jwt.sign({username},'1234',{
                    'expiresIn':60*60
                })
                let ar = apiResult(result.status,{token,username});
                res.send(ar);
            }else{
                res.send(result);
            }
        });
        // 删除
        app.post('/remove',async (req,res)=>{
            // 获取用户信息
            let username = req.body.username;
            let password = req.body.password;

            // 调用数据库模块
            let result = await db.delete('user',{username,password});
            res.send(result);
        });
        // 修改信息
        app.post('/update',async (req,res)=>{
            // 获取用户信息
            let username = req.body.username;

            // 获取要修改的数据
            let receiver = req.body.receiver;
            let address = req.body.address;
            let province = req.body.province;
            let city = req.body.city;
            let  region = req.body.region;

            // 调用数据库模块
            let result = await db.update('user',{username},{address,receiver,province,city,region});
            res.send(result);
        }) ;
        // 获取所有用户
        app.get('/getuser',async (req,res)=>{
            // 调用数据库模块
            let result = await db.select('user');
            res.send(result);
        });
        // 获取用户登陆状态
        app.post('/getStatus', filter,(req,res)=>{
            res.send(apiResult(true));
        })
    }
    
}