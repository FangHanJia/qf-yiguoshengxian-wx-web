<template>
    <div class="goodsmanager">
        <!-- 上传商品 -->
        <div class="mask" v-show="show" >
            <div class="form" >
                <h2>增加商品</h2>
                <div class="form-group">
                    <label for="id">id:</label>
                    <input type="text" class="form-control" id="id" name="id">
                </div>
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
                    <label for="type">type:</label>
                    <input type="text" class="form-control" id="type" name="type">
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
            <input type="text" id="selectgoods" class="selectgoods" v-model="keyword"/> 
            <button class="btn" @click="btn_search">查找商品</button>   
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
                    cols:['id','img','content','intro','sale','price','qtycont','type']
                },
                show:false,
                keyword:''

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
                myform.append('id', $('#id').val());
                myform.append('content', $('#content').val());
                myform.append('sale', $('#sale').val());
                myform.append('price', $('#price').val());
                myform.append('intro', $('#intro').val());
                myform.append('qtycont', $('#qtycont').val());
                myform.append('type', $('#type').val());
                myform.append('proimg', $('#proimg')[0].files[0]);
                
                if(!files){
                    alert('文件不能为空！');
                    return ;
                }else{
                    http.upload({
                        url: 'addproduct', 
                        data: myform, 
                        cb:function(res){
                            if(res.status){
                                alert('商品添加成功！');
                                this.show = false;
                                // 清空输入框内容
                                $('#id').val('');
                                $('#content').val('');
                                $('#sale').val('');
                                $('#price').val('');
                                $('#intro').val('');
                                $('#qtycont').val('');
                                $('#type').val('');
                            }else{
                                alert('商品添加失败！');
                                this.show = false;
                            }
                        }.bind(this)
                    })
                    
                }
            },
            btn_search(){
                // 获取输入框的关键字
                let keyword = this.keyword;
                if(!keyword){
                    alert('关键字不为空！');
                    return;
                }else{
                }
            }
        },
        mounted(){
            let _username = window.localStorage.getItem('_username');
            console.log(_username);
            if(_username && _username == 'admin'){
                alert('请谨慎操作！');
            }else{
                alert('请登陆！')
                router.push({name:'serverlogin'})
            }
        }
    } 
</script>