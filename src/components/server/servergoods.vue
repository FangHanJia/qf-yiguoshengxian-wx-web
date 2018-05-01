<template>
    <div class="goodsmanager">
        <!-- 上传商品 -->
        <div class="mask" v-show="show" >
             <div class="form" >
                <h2>增加商品</h2>
                <div class="form-group">
                    <label for="content">content:</label>
                    <input type="text" class="form-control" id="content" name="content">
                </div>
                <div class="form-group">
                    <label for="intro">intro:</label>
                    <input type="text" class="form-control" id="intro" name="intro">
                </div>
                <div class="form-group">
                    <label for="sale">sale:</label>
                    <input type="text" class="form-control" id="sale" name="sale">
                </div>
                <div class="form-group">
                    <label for="qtycont">qtycont:</label>
                    <input type="text" class="form-control" id="qtycont" name="qtycont">
                </div>
                <div class="form-group">
                    <label for="price">price:</label>
                    <input type="text" class="form-control" id="price" name="price">
                </div>

                <div class="form-group">
                    <label for="proimg">img:</label>
                    <input type="file"  id="proimg" name="proimg" class="proimg">
                </div>
                <button type="submit" class="btn btn-default btn-success" id="btn_save" @click="btn_save">保存</button>
                <button type="submit" class="btn btn-default btn_close btn-success" @click="close">取消</button>
            </div>
        </div>

        <div class="form-group selectbox">
            <label for="selectgoods">查看商品：</label>
            <input type="text" id="selectgoods" class="selectgoods" /> 
            <button class="btn">查找商品</button>   
            <button class="btn" @click="addProduct">增加商品</button>

        </div>
        <div class="tablebox">
            <datagrid :config="config"></datagrid>
        </div>
    </div>
</template>

<script type="text/javascript">
    import datagrid from './datagrid.vue';
    import http from '../../utils/httpclient';

    export default{
        components:{
            datagrid
        },
        data(){
            return {
                config:{
                    url:'getproduct',
                    cols:['id','_id','img','content','intro','sale','price','qtycont']
                },
                show:false

            }
        },
        methods:{
            addProduct(){
                this.show = true;
            },
            close(){
                this.show = false;
            },
            btn_save(){
               var myform = new FormData();
               var files = $('#proimg')[0].files[0];
                myform.append('content', $('#content').val());
                myform.append('sale', $('#sale').val());
                myform.append('price', $('#price').val());
                myform.append('intro', $('#intro').val());
                myform.append('qtycont', $('#qtycont').val());
                myform.append('proimg', $('#proimg')[0].files[0]);
                
                console.log(files)
                if(!files){
                    alert('文件不能为空！');
                    return ;
                }else{
                    http.upload({
                        url: 'addproduct', 
                        data: myform, 
                        cb:function(res){
                            console.log(res);
                            if(res.status){
                                alert('商品添加成功！');
                                this.show = false;
                            }else{
                                alert('商品添加失败！');
                                this.show = false;
                            }
                        }.bind(this)
                    })
                    
                }

            }
        }
    } 
</script>