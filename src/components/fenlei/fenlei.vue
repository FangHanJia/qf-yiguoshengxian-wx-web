<template>
    <div class="du">
        <div class="main_t">
          <hd></hd >  
        </div>

        <div class="main_l">
          <menus/>
        </div>

        <router-link to="/list">
          <div class="z-body">
          <router-view></router-view>
          </div>
        </router-link>

         <footComponent></footComponent>

    </div>
</template> 
<script >
 import footComponent from '../footer/foot.vue'
    import './fenlei.css'
    import hd from './header/tou.vue'
    import menus from './menu/menu.vue'
    export default{
        components:{
           hd,
           menus,
            footComponent
        }
    }
</script>