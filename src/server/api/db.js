// 用于操作数据库的模块
const apiResult = require('./apiResult');
const mc = require('mongodb').MongoClient;
let db = null;

// 数据库连接
mc.connect('mongodb://localhost:27017',(error,client)=>{
    if(error){
        return apiResult(false,error,'mogondb connect fail');
    }else{
        db = client.db('vue');
    }
});

// 暴露数据库模块
module.exports = {
    // 增
    async insert(_collection,_data){
        try{
            let result = await db.collection(_collection).insert(_data);
            // 返回状态
            return apiResult(result.insertedCount > 0,result.result);
        }catch(error){
            return apiResult(false,error);
        }
    },
    // 删
    async delete(_collection,_data){
        try{
            let result = await db.collection(_collection).remove(_data);
            return apiResult(result.result.n >0,result.result);
        }catch(error){
            return apiResult(false,error);
        }
    },
    // 查
    async select(_collection,_condition = {}){
        try{
            let items = await db.collection(_collection).find(_condition).toArray();
            let result =  apiResult(items.length > 0,items);
            return result;
        }catch(error){
            return apiResult(false,error);
        }
    },
    // 改
    async update(_collection,_data,_change){
        try{
            let result = await db.collection(_collection).updateOne(_data,{$set:_change});
            let res = apiResult(result.result.nModified > 0,result.result);
            return res;
        }catch(error){
            return apiResult(false,error);
        }
    },
    // 模糊查询
    async search(_collection,_reg){
        try{
            let items = await db.collection(_collection).find({content:{$regex:_reg}}).toArray();
            return apiResult(items.length > 0,items);
        }catch(error){  
            return apiResult(false,error);
        }
    }
}