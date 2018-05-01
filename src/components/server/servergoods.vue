<template>
    <div class="goodsmanager">
        <!-- 上传商品 -->
        <div class="mask" v-show="show" >
             <div class="form" >
                <h2>增加商品</h2>
                <div class="form-group">
                    <label for="procontent">content:</label>
                    <input type="text" class="form-control" id="procontent" name="procontent">
                </div>
                <div class="form-group">
                    <label for="prointro">intro:</label>
                    <input type="text" class="form-control" id="prointro" name="prointro">
                </div>




                <div class="form-group">
                    <label for="proimg">img:</label>
                    <input type="file"  id="proimg" name="proimg">
                </div>
                <button type="submit" class="btn btn-default" id="btn_save">保存</button>
                <button type="submit" class="btn btn-default" @click="close">取消</button>
            </div>
        </div>

        <div class="form-group selectbox">
            <label for="selectgoods">查看商品：</label>
            <input type="text" id="selectgoods" class="selectgoods" /> 
            <button class="btn">查找商品</button>   
            <button class="btn" @click="addProduct">增加商品</button>

        </div>
        <datagrid :config="config"></datagrid>
    </div>
</template>

<script type="text/javascript">
    import datagrid from './datagrid.vue';
    export default{
        components:{
            datagrid
        },
        data(){
            return {
                config:{
                    url:'getuser',
                    // cols:['id','img','content','intro','sale','price','qtycont','time','img1']
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
            }
        }
    } 
</script>