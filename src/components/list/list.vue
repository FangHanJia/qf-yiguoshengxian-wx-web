<template>
    <div id="list">
        <div class="tabb">
                <div class="tab-item" >
                    <router-link to="/list"><span @click="list">价格</span>
                        <i class="iconfont icon-weibiaoti33 shengxu" ></i>
                        <i class="iconfont icon-icon--1 jiangxu"></i>
                    </router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/newproduct">新品</router-link>
                </div>
                <div class="tab-item">
                    <router-link to="/sale">销量</router-link>
                </div>
        </div>
            <ul  class="goodslist">
                <li v-for="(item,index) in goods_list"  :data-id="item.id">
                    <router-link :to="{path:'/particulars',query: {img:item.img,content:item.content,intro:item.intro,price:item.price,qtycont:item.qtycont}}">
                        <div class="imgs">
                            <img :src="item.img">
                        </div>
                        <div class="goodsright">
                            <p class="content">{{item.content}}</p>
                            <p class="intro">{{item.intro}}</p>
                            <p class="sale" v-show="item.sale == ' '?false:true"><span class="salel">{{item.sale}}</span></p>                
                            <p class="price">￥{{Number(item.price).toFixed(2)}} <span class="qtycont">{{item.qtycont}}</span></p>
                            
                        </div>
                    </router-link>
                    <i class="iconfont icon-jiahao carts"></i>
                </li>
            </ul>
            <span class="car menu-a" @click="search3" ><i class="iconfont icon-gouwuchekong"><span id="num" style="color: red;">0</span></i></span>
    
        <router-view ></router-view>
    </div>
</template>

<script>
    import './list.css'
    import tab from './list.js'
    import vue from './vue.js'
    import fly from './jquery-addShopping.js'
    import paixu from './jquery-2.2.3.min.js'
    import http from '../../utils/httpclient'
    export default{
       tab,
       vue,
       paixu,
          data(){
            return{
                goods_list:[
                    
                    ],
                    n:0,
                    // show:flase
            }
        },
        mounted(){
            http.get('http://10.3.133.238:88/getproduct',{}).then(res=>{
                // console.log(res);
                let list = res.data.data;
                // console.log(list)
                let result = [];
                for(var i=0;i<list.length;i++){
                    if(list[i].type == "goodslist"){
                        // console.log(list[i]);
                        result.push(list[i]);
                    }
                }
                // console.log(result)
                this.goods_list = result;
            })
        },
        methods:{
            list(){
                let lis = this.goods_list;
                // console.log(this)
                // console.log(lis)
                function paixu(li){
                    return function(a,b){
                        let val1 = a[li];
                        let val2 = b[li];
                        return val1-val2;
                    }
                }
                this.n++;
                // console.log(this.n)
                if(this.n%2 != 0){
                    console.log(lis.sort(paixu("price")));
                }else{
                    console.log(lis.sort(paixu("price")).reverse())
                } 
            },
            search3(){
                this.$router.push({name:'car'})
            }
        }

     }
  


</script>