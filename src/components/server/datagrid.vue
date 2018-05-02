<template>
    <div>
        <!-- 编辑商品 -->
        <div class="mask" v-show="show">
            <div class="form" >
                <h2>编辑商品</h2>
                <div class="form-group">
                    <label for="id">id:</label>
                    <input type="text" class="form-control" id="id" name="id" disabled v-model="id">
                </div>
                <div class="form-group">
                    <label for="img">img:</label>
                    <input type="text" class="form-control" img="img" name="img" v-model="img">
                </div>
                <div class="form-group">
                    <label for="content">content:</label>
                    <input type="text" class="form-control" id="content" name="content" v-model="content">
                </div>
                <div class="form-group">
                    <label for="intro">intro:</label>
                    <input type="text" class="form-control" id="intro" name="intro" v-model="intro">
                </div>
                <div class="form-group">
                    <label for="sale">sale:</label>
                    <input type="text" class="form-control" id="sale" name="sale" v-model="sale">
                </div> 
                <div class="form-group">
                    <label for="price">price:</label>
                    <input type="text" class="form-control" id="price" name="price" v-model="price">
                </div>
                <div class="form-group">
                    <label for="qtycont">qtycont:</label>
                    <input type="text" class="form-control" id="qtycont" name="qtycont" v-model="qtycont">
                </div>
                <div class="form-group">
                    <label for="type">type:</label>
                    <input type="text" class="form-control" id="type" name="type" v-model="type">
                </div>
               
                <button type="submit" class="btn btn-default btn-success" id="btn_save" @click="btn_save">保存</button>
                <button type="submit" class="btn btn-default btn_close btn-success" @click="btn_cacel">取消</button>
            </div>
        </div>



        <table class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th v-for="(col,idx) in config.cols">{{col}}</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(obj,idx) in dataset">
                    <td v-for="(col,idx) in config.cols" :key="idx">{{obj[col]}}</td>
                    <td>
                        <button class="btn btn-danger  btn-default btn-sm" @click="btn_del(obj.id)">
                            删除
                        </button>
                        <button class="btn btn-success btn-sm" @click="btn_edit(obj)">编辑</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="text/javascript">
    import http from '../../utils/httpclient';

    export default {
        props:['config'],
        data(){
            return {
                dataset:[],
                show:false,
                // 编辑字段
                id:'',
                img:'',
                content:'',
                intro:'',
                sale:'',
                qtycont:'',
                price:'',
                type:''

            }
        },
        mounted(){
            http.get(this.config.url).then(res=>{
                this.dataset = res.data.data;
            })
        },
        methods:{
            // 删除事件
            btn_del(id){
                var r = confirm('删除该商品吗？');
                if (r==true){
                    http.post('delproduct',{id}).then(res=>{
                        // console.log(res);
                        if(res.status){
                            http.get(this.config.url).then(res=>{
                                this.dataset = res.data.data;
                            })                       
                        }
                    })
                }else{
                  // alert("!");
                  return;
                }
            },
            // 编辑事件
            btn_edit(obj){
                this.show = true;
                this.id = obj.id;
                this.img = obj.img;
                this.content = obj.content;
                this.intro = obj.intro;
                this.sale = obj.sale;
                this.qtycont = obj.qtycont;
                this.price = obj.price;
                this.type = obj.type;
            },
            // 保存数据
            btn_save(){
                var id = this.id;
                var changeObj = {
                    id:this.id,
                    img:this.img,
                    content:this.content,
                    intro:this.intro,
                    sale:this.sale,
                    price:this.price,
                    qtycont:this.qtycont,
                    type:this.type
                }
                // 将数据发给后端进行修改
                http.post('updateproduct',changeObj).then(res=>{
                    // console.log(res)
                    if(res.status){
                        this.show = false;
                        alert('修改成功！');
                        // 重新刷新
                        http.get(this.config.url).then(res=>{
                            this.dataset = res.data.data;
                        })
                    }else{
                        alert('修改失败！')
                    }
                })
            },
            // 关闭弹窗
            btn_cacel(){
                this.show = false;
            }
        }
    }
</script>