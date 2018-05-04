<template>
    <div>
        <h1>用户管理</h1>
        <usergrid :config="config"></usergrid>
    </div>

</template>

<script type="text/javascript">
    import usergrid from './usergrid.vue';
    export default{
        components:{
            usergrid
        },
        data(){
            return {
                config:{
                    url:'getuser',
                    cols:['receiver','username','password','province','city','region','address']
                }
            }
        }
    } 
</script>