<template>
    <table class="table table-striped table-bordered table-hover">
        <thead>
            <tr>
                <th v-for="(col,idx) in config.cols">{{col}}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(obj,idx) in dataset">
                <td v-for="(col,idx) in config.cols" :key="idx">{{obj[col]}}</td>
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
                console.log(res.data.data)
                this.dataset = res.data.data;
            })
        }
    }
</script>