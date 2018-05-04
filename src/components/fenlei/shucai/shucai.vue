<template>
    <ul class="tt">
        <li v-for="(item,idx) in foodDrink">
            <img :src="item.img">
            <p class="pt">{{item.content}}</p>
        </li>
    </ul> 
</template>
<script>
    import http from "../../../utils/httpclient.js"
    export default{
        data(){
            return{
               foodDrink:[]
            }
        },
        mounted(){
            http.get('http://10.3.133.238:88/getproduct').then((res)=>{  
                var pl=[];
                var lt=res.data.data;
                for(var i=0;i<lt.length;i++){
                    if(lt[i].type=='foodDrink'){
                        pl.push(lt[i])
                    }      
                } 
                    this.foodDrink=pl;
                    console.log( this.foodDrink)
            });
        },
    }
</script>
