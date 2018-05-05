<template>
    <div id="car">
        <h2>全场满100元包邮，还差<i>100.00</i>元包邮</h2>
        <div class="cart">
            <ul class="tab1">
                <li v-for="(item,index) in goodlist" >
                    <em @click="danxuan(index)" :class="{ative:item.is_selected}"></em>
                    <div class="boxl">
                        <img :src="item.img">
                        <p>不可用卷</p>
                    </div>
                    <div class="boxr">
                        <p>{{item.content}}</p><i class="iconfont icon-shanchu"></i>
                        <div class="youhui">

                        </div>
                        <span>￥{{item.price}}</span>
                        <div class="pri">
                            <button @click="jie(index)">-</button>
                            <input type="text" v-model="item.qty">
                            <button @click="jia(index)">+</button>
                        </div>
                    </div>
                    <div class="man">
                        <p><i>满减</i> 已满足 [满1件减40元，节省40元]</p>
                    </div>
                </li>
            </ul>
        </div>
           <div class="lick">
             <h3>· 猜你喜欢 ·</h3>
             <ul>
                 <li v-for="(item,index) in goods_list">
                     <span ><img  :src="item.img" /></span>
                     <p>{{item.content}}</p>
                     <i>￥{{item.price}}</i>
                     <em class="iconfont icon-jiahao"></em>
                 </li>
             </ul>
         </div>


        <div class="js">
            <p><em @click="quanxuan" :class="{ative:all}"></em><i>全选</i></p>
            <p>合计（不含运费）:<span>￥{{total}}</span></p>
            <router-link to="/jiesuan"><h3>去结算(<span>{{Num}}</span>)</h3></router-link>
        </div>

        <footComponent></footComponent>
    </div>
</template>

<script>
    import footComponent from '../footer/foot.vue'
    import './car.css'
    import http from '../../utils/httpclient'



    export default{
        data(){
            return {
                goodlist: [],
                total:0.00,
                Num:0,
                all:false,
                goods_list:[]
            }
        },
       
        methods:{
            getTob(){
                this.total = 0;
                this.Num = 0;
                let good = 0;
                let num1 = 0;

                for(let i=0;i<this.goodlist.length;i++){
                    let _d = this.goodlist[i];
                    if(_d.is_selected){
                        num1 += _d['price'] * _d['qty'];
                        this.total = num1.toFixed(2);
                        good += 1;
                        this.Num += 1;
                        if(good == this.goodlist.length){
                            this.all = true ;
                        } else {
                            this.all = false ;
                        }
                    }
                }
            },
            danxuan(item){
                this.goodlist[item].is_selected = !this.goodlist[item].is_selected;

                this.getTob();

            },
            quanxuan(){
                if(this.all == true){
                    for(var i = 0;i<this.goodlist.length;i++){
                        this.goodlist[i].is_selected = false;
                    }
                    this.all = false
                } else {
                    for(var i = 0;i<this.goodlist.length;i++){
                        this.goodlist[i].is_selected = true;
                    }
                    this.all = true
                }
                this.getTob();
            },
            jie(item){
                this.goodlist[item].qty -= 1;

                if(this.goodlist[item].qty < 1){
                    this.goodlist[item].qty =1;
                }
                this.getTob();
            },
            jia(item){
                this.goodlist[item].qty += 1;

                this.getTob();
            }
        },
        components: {
           footComponent
        },
        mounted(){
        //    cookie
               var cookie = document.cookie;
            //    console.log(cookie);
                cookie=cookie.split('; ');
            //    console.log(cookie);
                cookie.forEach(item=>{
                    //  console.log(item);
                    var arr=item.split('=');
                    // console.log(arr);
                    if(arr[0]=='goodlist'){
                        this.goodlist=JSON.parse(arr[1]);
                        // console.log(this.goodlist)
                    }
                });
                // console.log(this.goodlist);
            //    return this.goodlist;
          
            // 猜你喜欢数据
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
               
              
                    
            
        }
    

//   <div class="lick">
//             <h3>· 猜你喜欢 ·</h3>
//             <ul>
//                 <li v-for="(item,index) in goods_list">
//                     <span></span>
//                     <p>{{item.content}}</p>
//                     <i>￥{{item.price}}</i>
//                     <em class="iconfont icon-jiahao"></em>
//                 </li>
//             </ul>
//         </div>


//         <div class="js">
//             <p><em @click="quanxuan" :class="{ative:all}"></em><i>全选</i></p>
//             <p>合计（不含运费）:<span>￥{{total}}</span></p>
//             <h3>去结算(<span>{{Num}}</span>)</h3>
//         </div>
</script>