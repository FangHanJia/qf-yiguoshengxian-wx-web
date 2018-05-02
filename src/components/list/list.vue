<template>
    <div id="list">
      <div class="tabb">
            <div class="tab-item">
                <router-link to="/sale">销量</router-link>
            </div>
             <div class="tab-item">
                <router-link to="/newproduct">新品</router-link>
            </div>
             <div class="tab-item">
                <router-link to="/price">价格
                
                </router-link>
                <i class="iconfont icon-weibiaoti33"></i>
                <i class="iconfont icon-icon--1"></i>

            </div>
    </div>
    <div class="content"></div>
    <router-view ></router-view>
    </div>
</template>

<script>
    import './list.css'
    
    export default{
       
    }


</script>