<template>
    <div id="jiesuanl">
        <router-link to='/dizhi'><div class="diz">
            <p><i class="iconfont icon-wodeshouhuodizhi"></i>添加收货地址<em class="iconfont icon-icon--"></em></p>
        </div></router-link>

        <div class="shangp">
            <p>共<span>7</span>件商品<em class="iconfont icon-icon--"></em></p>
            <ul>
                <li></li>
                <li></li>
            </ul>
        </div>

        <div class="peis">
            <p>配送日期<span>09:00~21:00</span><em class="iconfont icon-icon--"></em></p>
            <p>发票信息<span>不需要</span><em class="iconfont icon-icon--"></em></p>
            <p>留言:<input type="text" placeholder="如有特殊要求，请在此留言"></p>
            <p class="p1">优惠券<span>不满足使用条件</span></p>
        </div>

        <div class="heji">
            <ul>
            <li>商品合计<span>￥757.60</span></li>
            <li>运费<span>￥10.00</span></li>
            <li>应付金额<span>￥767.60</span></li>
            <li>U币抵现<i>i</i><span>促销商品不能使用U币</span></li>
            </ul>
        </div>

        <div class="foot">
            <p>应付金额:<span>￥767.60</span></p>
            <em>结算</em>
        </div>

    </div>
</template>

<script>
    import './jiesuan.css'

    export default{}


</script>