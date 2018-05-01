<template>
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
                <td><button class="btn btn-danger" @click="btn_del(obj.id)">删除</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script type="text/javascript">
    import http from '../../utils/httpclient';

    export default {
        props:['config'],
        data(){
            return {
                dataset:[]
            }
        },
        mounted(){
            http.get(this.config.url).then(res=>{
                this.dataset = res.data.data;
            })
        },
        methods:{
            btn_del(id){
                console.log(id);
                http.post('delproduct',{id}).then(res=>{
                    // console.log(res);
                    if(res.status){
                        http.get(this.config.url).then(res=>{
                            this.dataset = res.data.data;
                        })                       
                    }
                })
            }
        }
    }
</script>