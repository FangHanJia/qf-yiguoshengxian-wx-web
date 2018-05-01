<template>
    <div class="home">
        <div class="hd">
            <hd></hd>
        </div>
        <div class="cont">
            <menus></menus>
            <div class="datagrid">
                <router-view></router-view>
            </div>
        </div>
        <div class="foot">
            <foot></foot>
        </div>
    </div>
</template>
<script type="text/javascript">
    import '../css/serverhome.css';
    import hd from './serverheader.vue';
    import foot from './serverfooter.vue';
    import menus from './servermenus.vue';


    export default{
        components:{
            hd,
            foot,
            menus
        }
    }
</script>