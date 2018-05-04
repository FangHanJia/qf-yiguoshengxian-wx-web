<template>
    <div>
      <div class="banner">
        <ht></ht>
      </div>
        <router-link to="/fenlei/jinkou">
          <div class="box1"> 
            <img src="../../img/a.gif" height="115" width="375" alt="" />
              <ul class="t1">
                <li style="margin-left:0.3125rem;"><img src="../../img/a1.png" height="48.3" width="48.3" alt="" /><p>新鲜水果</p></li>
                <li><img src="../../img/a2.png" height="48.3" width="48.3" alt="" /><p>精选肉类</p></li>
                <li><img src="../../img/a3.png" height="48.3" width="48.3" alt="" /><p>海鲜水产</p></li>
                <li><img src="../../img/a4.png" height="48.3" width="48.3" alt="" /><p>快手料理</p></li>
                <li style="margin-left:0.3125rem;"><img src="../../img/a5.png" height="48.3" width="48.3" alt="" /><p>会员福利</p></li>
                <li><img src="../../img/a6.png" height="48.3" width="48.3" alt="" /><p>精品原箱</p></li>
                <li><img src="../../img/a7.png" height="48.3" width="48.3" alt="" /><p>新品尝鲜</p></li>
                <li><img src="../../img/a8.png" height="48.3" width="48.3" alt="" /><p>即烹美食</p></li>
              </ul> 
          </div>
          <div class="box2"> 
            <img src="../../img/b.jpg" height="217.39" width="375" alt=""  />
              <ul class="t2">
                <li v-for="(item,idx) in dataset">
                  <img :src="item.img">
                  <p class="pt">{{item.content}}</p>
                  <p class="tip"> {{item.sale}} </p>
                  <span class="price">￥{{item.price}}</span>
                  <span class="qt">{{item.qtycont}}</span>
                </li>
              </ul> 
          </div>
     

          <div class="box2">
            <img src="../../img/c.jpg" height="217.39" width="375" alt=""  />
              <ul class="t2">
                <li v-for="(item,idx) in c">
                  <img :src="item.img">
                  <p class="pt">{{item.content}}</p>
                  <p class="tip"> {{item.sale}} </p>
                  <span class="price">￥{{item.price}}</span>
                  <span class="qt">{{item.qtycont}}</span>
                </li>
              </ul> 
          </div>

          <div class="box2">
            <img src="../../img/d.jpg" height="217.39" width="375" alt="" />
              <ul class="t2">
                <li v-for="(item,idx) in d">
                  <img :src="item.img">
                  <p class="pt">{{item.content}}</p>
                  <p class="tip"> {{item.sale}}   </p>
                  <span class="price">￥{{item.price}}</span>
                  <span class="qt">{{item.qtycont}}</span>
                </li>  
              </ul>
          </div>
       
          <div class="bot1">
            <h1>新鲜水果</h1>
              <ul class="b1">
                <li v-for="(item,idx) in freshFruit">
                  <img :src="item.img">
                  <p class="cn">{{item.content}}</p>
                  <p class="bt">{{item.intro}}</p>
                  <p class="tip"> {{item.sale}} </p>
                  <span class="price">￥{{item.price}}</span>
                  <span class="qt">{{item.qtycont}}</span>
                </li>
              </ul>
          </div>

          <div class="bot1">
            <h1>精选水产</h1>
                <ul class="b1">
                  <li v-for="(item,idx) in seaFood">
                    <img :src="item.img">
                    <p class="cn">{{item.content}}</p>
                    <p class="bt">{{item.intro}}</p>
                    <p class="tip"> {{item.sale}}  </p>
                    <span class="price">￥{{item.price}}</span>
                    <span class="qt">{{item.qtycont}}</span>
                  </li> 
                </ul>
          </div>

          <div class="bot1">
            <h1>精选肉类</h1>
              <ul class="b1">
                <li v-for="(item,idx) in selectedMeat">
                  <img :src="item.img">
                  <p class="cn">{{item.content}}</p>
                  <p class="bt">{{item.intro}}</p>
                  <p class="tip"> {{item.sale}}  </p>
                  <span class="price">￥{{item.price}}</span>
                  <span class="qt">{{item.qtycont}}</span>
                </li>
              </ul>
          </div>

          <div class="bot3">
            <h1>禽类蛋品</h1>
              <ul class="b3">
                <li v-for="(item,idx) in egg">
                  <img :src="item.img">
                  <p class="cn">{{item.content}}</p>
                  <p class="bt">{{item.intro}}</p>
                  <p class="tip"> {{item.sale}}</p>
                  <span class="price">￥{{item.price}}</span>
                  <span class="qt">{{item.qtycont}}</span>
                </li>   
              </ul>
          </div>
           
          <div class="bot4">
            <h1>乳品饮料</h1>
              <ul class="b4">
                <li v-for="(item,idx) in foodDrink">
                  <img :src="item.img">
                  <p class="cn">{{item.content}}</p>
                  <p class="bt">{{item.intro}}</p>
                  <p class="tip"> {{item.sale}}</p>
                  <span class="price">￥{{item.price}}</span>
                  <span class="qt">{{item.qtycont}}</span>
                </li>    
              </ul>
          </div>

          <div class="bot8">
            <h1>美味即享</h1>
              <ul class="b8">
                <li v-for="(item,idx) in enjoyTaste">
                  <img :src="item.img">
                  <p class="cn">{{item.content}}</p>
                  <p class="bt">{{item.intro}}</p>
                  <p class="tip"> {{item.sale}} </p>
                  <span class="price">￥{{item.price}}</span>
                  <span class="qt">{{item.qtycont}}</span>
                </li>   
              </ul>
          </div>
        </router-link>
          <div class="bot9">
            <p>沪IPC备D9DD8015号<br/>上海易果电子商务有限公司</p>
          </div>
    </div>
</template>
<script type="text/javascript">
import http from '../../../utils/httpclient.js'
import ht from './c.vue'
  export default{
      components: {
       ht
    },
      data(){
        return{
            c:[],
            d:[],
            dataset:[],
            date:[],
          freshFruit:[],
          seaFood:[],
          selectedMeat:[],
          egg:[],
          foodDrink:[],
          enjoyTaste:[]
        }
      },
    mounted(){
       http.get('http://10.3.133.238:88/getproduct').then((res)=>{  
        var pl=[];
        var lt=res.data.data;
        for(var i=0;i<lt.length;i++){
          if(lt[i].type=='b'){
            pl.push(lt[i])
          }      
        } 
          this.dataset=pl;
          console.log( this.dataset)
      });

       http.get('http://10.3.133.238:88/getproduct').then((res)=>{  
        var pl=[];
        var lt=res.data.data;
        for(var i=0;i<lt.length;i++){
          if(lt[i].type=='c'){
            pl.push(lt[i])
          }      
        } 
          this.c=pl;
      });


        http.get('http://10.3.133.238:88/getproduct').then((res)=>{  
          var pl=[];
          var lt=res.data.data;
          for(var i=0;i<lt.length;i++){
            if(lt[i].type=='d'){
              pl.push(lt[i])
            }      
          } 
            this.d=pl;

        });

        http.get('http://10.3.133.238:88/getproduct').then((res)=>{  
          var pl=[];
          var lt=res.data.data;
          for(var i=0;i<lt.length;i++){
            if(lt[i].type=='c'){
              pl.push(lt[i])
            }      
          } 
          this.date=pl;
          
        });

        http.get('http://10.3.133.238:88/getproduct').then((res)=>{  
          var pl=[];
          var lt=res.data.data;
          for(var i=0;i<lt.length;i++){
            if(lt[i].type=='freshFruit'){
              pl.push(lt[i])
            }      
          } 
          this.freshFruit=pl;
        });

        http.get('http://10.3.133.238:88/getproduct').then((res)=>{  
          var pl=[];
          var lt=res.data.data;
          for(var i=0;i<lt.length;i++){
            if(lt[i].type=='seaFood'){
              pl.push(lt[i])
            }      
          } 
          this.seaFood=pl;
        });

        http.get('http://10.3.133.238:88/getproduct').then((res)=>{  
          var pl=[];
          var lt=res.data.data;
          for(var i=0;i<lt.length;i++){
            if(lt[i].type=='selectedMeat'){
              pl.push(lt[i])
            }      
          } 
          this.selectedMeat=pl;
          
        });

        http.get('http://10.3.133.238:88/getproduct').then((res)=>{  
          var pl=[];
          var lt=res.data.data;
          for(var i=0;i<lt.length;i++){
            if(lt[i].type=='egg'){
              pl.push(lt[i])
            }      
          } 
          this.egg=pl;
          
        });

        http.get('http://10.3.133.238:88/getproduct').then((res)=>{  
          var pl=[];
          var lt=res.data.data;
          for(var i=0;i<lt.length;i++){
            if(lt[i].type=='foodDrink'){
              pl.push(lt[i])
            }      
          } 
          this.foodDrink=pl;
          console.log(this.foodDrink)
        });

        http.get('http://10.3.133.238:88/getproduct').then((res)=>{  
          var pl=[];
          var lt=res.data.data;
          for(var i=0;i<lt.length;i++){
            if(lt[i].type=='enjoyTaste'){
              pl.push(lt[i])
            }      
          } 
          this.enjoyTaste=pl;
          console.log(this.enjoyTaste)
        });
      },
  }
</script>


