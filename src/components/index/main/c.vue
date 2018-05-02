<template>

  <slider :pages="pages" :sliderinit="sliderinit">
    <!-- slot  -->
  </slider>


  
</template>
 
<script>
import slider from 'vue-concise-slider'// 引入slider组件
export default {
   // el: '#app',
   data () {
      return {
        //图片列表[arr]
        pages:[
          {
            title: '',
            // img:'<img src="../../img/l1.jpg" alt="">'
            style:{
             background:'url(src/components/img/l1.jpg)'
            //  // background:'blue'
            }
          },
          {
           title: '',
           style:{
            background:'url(src/components/img/l2.jpg)'
            }
          },
          {
            title: 'slide3',
            style:{
            background:'url(src/components/img/l3.jpg)'

              // background:'url(img/d.jpg)',
            }
          },
          {
            title: '',
            // img:'<img src="../../img/l1.jpg" alt="">'
            style:{
             background:'url(src/components/img/l4.jpg)'
            //  // background:'blue'
            }
          },
          {
           title: '',
           style:{
            background:'url(src/components/img/l5.jpg)'
            }
          },
          {
            title: 'slide3',
            style:{
            background:'url(src/components/img/l6.jpg)'

              // background:'url(img/d.jpg)',
            }
          },
          {
            title: 'slide3',
            style:{
            background:'url(src/components/img/l7.jpg)'

              // background:'url(img/d.jpg)',
            },
          }


        ],
        //滑动配置[obj]
        sliderinit: {
          // currentPage: 0,//当前页码
          thresholdDistance: 500,//滑动判定距离
          thresholdTime: 200,//滑动判定时间
          autoplay:2000,//自动滚动[ms]
          loop:true,//循环滚动
          direction:' horizontal',//方向设置，垂直滚动
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1,//每次滑动项数
        }
      }
    },
    components: {
        slider
    }
}
</script>