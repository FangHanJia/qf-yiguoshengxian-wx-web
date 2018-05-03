<template>
<!-- <div> -->
  <!--  <div class="swiper-container"> -->

    <ul class="t3">
  <!--      style="width:1.5625rem;margin-right:0.125rem;"  -->
        <li v-for="(obj,idx) in dataset" :key="idx">
            <!-- <div class="goodsright"> -->
                <img :src="obj.img">
                <p class="pt">{{obj.intro}}</p>
                <p class="tip">{{obj.sale}}</p>
                <span class="price">￥{{obj.price}}</span>
                <span class="lt">/{{obj.qtycont}}</span>
        
        </li>
   
    </ul> 
</template>

<script>
import http from '../../../utils/httpclient'
    
    export default{
        data(){
            return{
                dataset:[]    
            }
        },

        mounted(){
            http.get('http://10.3.133.238:88/getproduct').then((res)=>{
                // if(res.type=='b'){
                    // console.log(1222)
                     this.dataset=res.data;
                      console.log(res.data)
                // }
               
            })
        },
    }


</script>