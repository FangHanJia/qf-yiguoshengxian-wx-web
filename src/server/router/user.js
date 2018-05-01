// 操作用户登陆注册的模块
const db = require('../api/db');
const apiResult = require('../api/apiResult');

module.exports = {
    account(app){
        // 注册
        app.post('/register',async (req,res)=>{
            // 获取用户数据
            let username = req.body.username;
            let password = req.body.password;

            // 用户地址：null
            let address = '';

            // 调用数据库模块
            // 注册之前先查询是否存在
            let result = await db.select('user',{username});
            if(result.status){
                res.send(apiResult(false));
            }else{
                let result = await db.insert('user',{username,password,address});
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
            res.send(result);
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
            let address = req.body.address;

            // 调用数据库模块
            let result = await db.update('user',{username},{address});
            res.send(result);
        }) ;
        // 获取所有用户
        app.get('/getuser',async (req,res)=>{
            // 调用数据库模块
            let result = await db.select('user');
            res.send(result);
        })
    }
    
}