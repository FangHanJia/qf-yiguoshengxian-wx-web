<template>
    <div class="home">
        <div class="hd" id="hd">
            <hd></hd>
        </div>
        <div class="cont">
            <menus></menus>
            <div class="datagrid">
                <router-view></router-view>
            </div>
        </div>
        <div class="foot" id="ft">
            <foot></foot>
        </div>
    </div>
</template>
<script type="text/javascript">
    import '../css/serverhome.css';
    import hd from './serverheader.vue';
    import foot from './serverfooter.vue';
    import menus from './servermenus.vue';
    import router from '../../router/router.js';


    export default{
        components:{
            hd,
            foot,
            menus
        },
        mounted(){
            let _username = window.localStorage.getItem('_username');
            console.log(_username);
            if(_username && _username == 'admin'){
                alert('欢迎来到后台系统！');
            }else{
                alert('请登陆！')
                router.push({name:'serverlogin'})
            }
        }
    }
</script>