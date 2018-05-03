// 管理员登陆模块
const db = require('../api/db');
const apiResult = require('../api/apiResult');

// 暴露模块
module.exports = {
    manager(app){
        app.post('/admin',async (req,res)=>{
            // 获取管理员信息
            let username  = req.body.username;
            let password = req.body.password;
            let result = await db.select('manager',{});
        })
    }
}