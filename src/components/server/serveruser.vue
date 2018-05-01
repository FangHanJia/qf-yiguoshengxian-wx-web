<template>
    <div>
        <h1>用户管理</h1>
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
                    cols:['username','password','address']
                }
            }
        }
    } 
</script>