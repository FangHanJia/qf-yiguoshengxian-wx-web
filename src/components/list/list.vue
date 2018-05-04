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
                <li v-for="(item,index) in goods_list"  :data-id="item.id" ref="listbox" >
                    <router-link :to="{path:'/particulars',query: {id:item.id,img:item.img,content:item.content,intro:item.intro,price:item.price,qtycont:item.qtycont}}">
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
                    <i class="iconfont icon-jiahao carts" @click="addcarts(item)"></i>
                </li>
            </ul>
            <span class="car menu-a" @click="search3" ><i class="iconfont icon-gouwuchekong"><span id="num" style="color: red;">{{count}}</span></i></span>
    
        <router-view ></router-view>
    </div>
</template>

<script>
    import './list.css'
    // import tab from './list.js'
    
    import fly from './jquery-addShopping.js'
   
    import http from '../../utils/httpclient'
    export default{
    //    tab,
        fly,
      
          data(){
            return{
                goods_list:[],
                n:0,
                listresult:{
                            id:'',
                            img:'',
                            content:'',
                            price:'',
                            is_selected: false,
                            qty:''
                        },
                carresult:[],
                count:0,
                num:0
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

            //飞入购物车
              $(function(){
                $('.carts').shoping({
                    endElement:".menu-a",
                    iconCSS:"",
                    iconImg:"src/components/img/cart.png",
                    endFunction:function(element){
                        $("#num").html(parseInt($("#num").html())+1);
                        //  console.log(element);
                        return false;
                    }
                })
            });
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
            },
            addcarts(item){
                

                var idx;
                var has = this.carresult.some(function(g,i){
                    idx = i;
                    return g.id === item.id;
                });
                if(has){
                    this.carresult[idx].qty += 1;
                   
                    
                }else{
                    this.listresult = {
                                    id:item.id,
                                    img:item.img,
                                    content:item.content,
                                    price:item.price,
                                    is_selected: false,
                                    qty:1
                                }
                        this.carresult.push(this.listresult);
                        console.log( this.carresult)
                };
                        // console.log( this.carresult.length)
                
                //     for(var i=0;i<this.carresult.length;i++){
                //             //  console.log(this.carresult[i].qty) 
                //              var count = this.carresult[i].qty;

                //     }
                //    this.count  =count

                var d = new Date(); 
                // console.log(d)
                d.setDate(d.getDate()+7);
                
                document.cookie = 'goodlist='+JSON.stringify(this.carresult)+';expires=' + d.toUTCString();
            }
        },
        

     }
  
                    // <router-link :to="{path:'/particulars',query: {img:item.img,content:item.content,intro:item.intro,price:item.price,qtycont:item.qtycont}}">


</script>