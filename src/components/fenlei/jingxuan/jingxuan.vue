<!-- <template>
<div>
    <h1>精选肉类</h1>
</div>
</template> -->


<!-- <template>
<div>
    <h1>进口水果</h1>

</div>
</template> -->




<template>
<!-- <div> -->
  <!--  <div class="swiper-container"> -->

    <ul class="tt">
  <!--      style="width:1.5625rem;margin-right:0.125rem;"  -->
        <li v-for="(item,index) in date">
            <!-- <div class="goodsright"> -->
                <img :src="item.img">
                <p class="pt">{{item.concent}}</p>
                <!-- <p class="tip">{{item.tip}}</p>
                <span class="price">￥{{item.price}}</span>
                <span class="lt">/{{item.weight}}</span> -->
               <!--  <p class="price">{{item.price}} <span class="qtycont">{{item.qtycont}}</span></p>
                <i class="iconfont icon-jiahao"></i> -->
                
       <!--      </div> -->
        
        </li>
   
    </ul> 

 <!--      <div class="swiper-pagination"></div> -->
   <!--  </div> -->


</template>

<script>
    
    export default{
        data(){
            return{
                date:[
                    {
                        id:1,
                        img:'src/components/img/b1.jpg',
                      concent:'皇冠梨'
                        // tip:'直降',
                        // price:19.80,
                        // weight:'3.4kg'
                    },{
                        id:2,
                         img:'src/components/img/b2.jpg',
                      concent:'皇冠梨'
                        // tip:'直降',
                        // price:19.80,
                        // weight:'3.9kg'
                    },{
                        id:3,
                        img:'src/components/img/b3.jpg',
                      concent:'河北皇梨'
                        // tip:'直降',
                        // price:19.80,
                        // weight:'3.8kg'
                    },
                    {
                        id:4,
                        img:'src/components/img/b4.jpg',
                      concent:'河北'
                        // tip:'直降',
                        // price:19.80,
                        // weight:'3.1kg'
                    },
                    {
                        id:5,
                        img:'src/components/img/b5.jpg',
                      concent:'河北'
                        // tip:'直降',
                        // price:19.80,
                        // weight:'3.3kg'
                    },{
                        id:6,
                        img:'src/components/img/b6.jpg',
                        concent:'8个'
                        // tip:'直降',
                        // price:19.80,
                        // weight:'3.3kg'
                    },{
                        id:7,
                        img:'src/components/img/b7.jpg',
                         concent:'河皇'
                        // tip:'直降',
                        // price:19.80,
                        // weight:'3.3kg'
                    }
                    ]
            }
        }
    }


</script>
