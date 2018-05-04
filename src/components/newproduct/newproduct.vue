<template>
<div class="zong">
    <ul>
        <li v-for="(item,index) in goods_list">
            <div class="imgs">
                <img :src="item.img">
            </div>
            <div class="goodsright">
                <p class="content">{{item.content}}</p>
                <p class="intro">{{item.intro}}</p>
                <p class="sale"><span class="salel">{{item.sale}}</span></p>                
                <p class="price">￥{{item.price.toFixed(2)}} <span class="qtycont">{{item.qtycont}}</span></p>
                <i class="iconfont icon-jiahao"></i>
                
            </div>
        
        </li>
    </ul>
    </div>
</template>

<script>
    
    export default{
        data(){
            return{
                goods_list:[
                   
                    ]
            }
        },
       
    }


</script>