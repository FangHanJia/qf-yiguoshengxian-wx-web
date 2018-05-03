<template>
    <div>
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
                        <button class="btn btn-danger  btn-default btn-sm">
                            删除
                        </button>
                        <button class="btn btn-success btn-sm">编辑</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script type="text/javascript">
    import http from '../../utils/httpclient';

    export default{
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
        }
    }

</script>