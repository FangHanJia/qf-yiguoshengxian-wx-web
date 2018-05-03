<template>
    <div id="car">
        <h2>全场满100元包邮，还差<i>100.00</i>元包邮</h2>
        <div class="cart">
            <ul class="tab1">
                <li v-for="(idx,item) in goods" >
                    <em @click="danxuan(item)" :class="{ative:idx.is_selected}"></em>
                    <div class="boxl">
                        <img src="../img/l3.png">
                        <p>不可用卷</p>
                    </div>
                    <div class="boxr">
                        <p>{{idx.content}}</p><i class="iconfont icon-shanchu"></i>
                        <div class="youhui">

                        </div>
                        <span>￥{{idx.price}}</span><del>￥{{idx.yuanjia}}</del>
                        <div class="pri">
                            <button @click="jie(item)">-</button>
                            <input type="text" v-model="idx.num">
                            <button @click="jia(item)">+</button>
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
                <li v-for="(idx,item) in goods">
                    <span></span>
                    <p>{{idx.content}}</p>
                    <i>￥{{idx.price}}</i>
                    <em class="iconfont icon-jiahao"></em>
                </li>
            </ul>
        </div>


        <div class="js">
            <p><em @click="quanxuan" :class="{ative:all}"></em><i>全选</i></p>
            <p>合计（不含运费）:<span>￥{{total}}</span></p>
            <h3>去结算(<span>{{Num}}</span>)</h3>
        </div>
        <footComponent></footComponent>
    </div>
</template>

<script>
    import footComponent from '../footer/foot.vue'
    import './car.css'
    export default{
        data(){
            return {
                goods: [
                        {   
                            id:1,
                            content: '康贝标准口PP奶瓶240ml',
                            num:2,
                            price: 607.00,
                            yuanjia:800.00,
                            is_selected: false
                        },{
                            id:2,
                            content: '康贝标准口PP奶瓶240ml',
                            num: 2,
                            price: 450.00,
                            yuanjia:680.00,
                            is_selected: false
                        },{
                            id:3,
                            content: '康贝标准口PP奶瓶240ml',
                            num: 2,
                            price: 480.00,
                            yuanjia:580.00,
                            is_selected: false
                        },
                    ],
                total:0.00,
                Num:0,
                all:false
            }
        },
        methods:{
            getTob(){
                this.total = 0;
                this.Num = 0;
                let good = 0;

                for(let i=0;i<this.goods.length;i++){
                    let _d = this.goods[i];
                    if(_d.is_selected){
                        this.total += _d['price'] * _d['num'];
                        good += 1;
                        this.Num += 1;
                        if(good == this.goods.length){
                            this.all = true ;
                        } else {
                            this.all = false ;
                        }
                    }
                }
            },
            danxuan(item){
                this.goods[item].is_selected = !this.goods[item].is_selected;

                this.getTob();

            },
            quanxuan(){
                if(this.all == true){
                    for(var i = 0;i<this.goods.length;i++){
                        this.goods[i].is_selected = false;
                    }
                    this.all = false
                } else {
                    for(var i = 0;i<this.goods.length;i++){
                        this.goods[i].is_selected = true;
                    }
                    this.all = true
                }
                this.getTob();
            },
            jie(item){
                this.goods[item].num -= 1;

                if(this.goods[item].num < 1){
                    this.goods[item].num =1;
                }
                this.getTob();
            },
            jia(item){
                this.goods[item].num += 1;

                this.getTob();
            }
        },
        components: {
           footComponent
        }
    }


</script>