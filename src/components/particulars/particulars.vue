<template>
    <div id="particulars">
        <div class="bigimgs">
             <img :src=" $route.query.img"/>
        </div>
        <div class="goods">
                <p class="content2">{{$route.query.content}}</p>
                <p class="intro2">{{$route.query.intro}}</p>
                <p class="price2">￥{{$route.query.price}}<span class="chandi">产地：<span>河北唐山</span></span></p>
                <p class="zhichi"><img src="src/components/img/wde2.png"/>不支持7天无理由退货</p>
              
        </div>
        <div class="d-car">
            <div class="zititubiao">
                <ul>
                    <li @click="search1"><i class="iconfont icon-shouye shouye"></i>首页</li>
                    <li @click="search2"><i class="iconfont icon-gouwuchekong gouwuche menu-a "><span id="num" style="color: red;">0</span></i>购物车</li>
                </ul>
            </div>
            <div class="addcar carts">加入购物车</div>
        </div>
        
        <div class="xinxi">
            <p class="guige"><span class="ming">规格</span><span class="qtycont2">{{$route.query.qtycont}}</span><p>
            <p class="qty"><span class="ming shuliang" >数量</span>
                <span class="minus" @click="minus">-</span>
                 <input type="text" class="shuru" v-model.number="result"/>
                <span class="add" @click="plus">+</span>

            </p>
        </div>
        <div class="shouhuo">
            <div class="songzhi"> <span class="ming ">送至</span></div>
            <div class="dizhi">
                <img src="src/components/img/wde1.png"/> <h4>广东省 广州市 天河区</h4>
               <p><span class="youhuo">有货</span><span class="songda">24:00 前完成订单,预计明日送达</span></p>
            </div>
        </div>

        <div class="pinglu">
            <h4>评论(2371)<span><span class="haoping">100%</span>好评<i class="iconfont icon-icon--"></i></span></h4>
            <div>
                <img src="src/components/img/wde4.png"/>
                <h3>特别好吃，新鲜， 甜</h3>
                <span class="mingzi">xd***</span>
            </div>
            
        </div>
        <div class="guesslike">
            <p>猜你喜欢</p>
            <ul class="guess">
                 <li v-for="(item,index) in guess_list"  :data-id="item.id">
                    <router-link :to="{path:'/particulars',query: {img:item.img,content:item.content,intro:item.intro,price:item.price,qtycont:item.qtycont}}">
                        <div class="imgs3">
                            <img :src="item.img">
                        </div>
                        <div class="">
                            <p class="content3">{{item.content}}</p>
                            <p class="price-3">￥{{Number(item.price).toFixed(2)}} <span class=""><i class="iconfont icon-jiahao carts newicon-jiahao"></i></span></p>
                            
                        </div>
                    </router-link>
                    
                </li>
            </ul>
                <div class="chakan">
                   <img src="src/components/img/wde3.png" class="tuwen"/> 
                </div>
        </div>

           
    </div>
</template>

<script>
    import './particulars.css'
    import chuancan from './particulars.js'
    import carDH from './jquery-addShopping.js'
     import http from '../../utils/httpclient'
    // 
    export default{
        chuancan,
        data(){
            return{
                result:1,
                guess_list:[]
            }
        },
          mounted(){
            http.get('http://10.3.133.238:88/getproduct',{}).then(res=>{
                // console.log(res);
                let list = res.data.data;
                // console.log(list)
                let result = [];
                for(var i=0;i<list.length;i++){
                    if(list[i].type == "c"){
                        // console.log(list[i]);
                        result.push(list[i]);
                    }
                }
                // console.log(result)
                this.guess_list = result;
            })
        },
       methods:{
           search1(){
               this.$router.push({name:'index'})
           },
           search2(){
               this.$router.push({name:'car'})
           },
           minus(){
               this.result--,
               this.$emit('input', {res: this.result, other: '--'})
                },
           plus() {
                this.result++,
                this.$emit('input', {res: this.result, other: '++'})
                } ,
       }
    }


</script>