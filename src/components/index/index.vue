<template>
    <div class="big">
       <!--  <div id="bo"> -->
            <hh></hh>

     <!--    </div> -->
        <div class="main">
        
        <menus/>

        </div>
        <footComponent></footComponent>
    </div>
</template>

<script>

    import './index.css'
    import hh from './header/header.vue'
    import menus from './main/main.vue'
    import footComponent from '../footer/foot.vue'
    export default {
        components: {
           footComponent,
           menus,
           hh
        }
    }
</script>