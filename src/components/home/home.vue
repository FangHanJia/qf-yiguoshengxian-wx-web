<template>
    <div class="box_l">
        <div class="header">
            <div class="headl">
                <span></span>
                <p>
                    <router-link to="/login">登录 </router-link>/
                    <router-link to="/reg">注册</router-link>
                </p> 
            </div>
            <div class="headr">
                <i class="iconfont icon-shezhi"></i>
            </div>
        </div>
        <div class="purse">
            <ul>
                <li>
                    <span>-</span>
                    <span>账户余额</span>
                </li>
                <li>
                    <span>-</span>
                    <span>优惠券</span>
                </li>
                <li>
                    <span>-</span>
                    <span>悠币</span>
                </li>
            </ul>
        </div>
        <div class="lmain">
            <div class="lmain_t">
                <ul>
                    <li>
                        <i class="iconfont icon-daizhifu"></i>
                        <span>待支付</span>
                    </li>
                    <li>
                        <i class="iconfont icon-daishouhuo"></i>
                        <span>待收货</span>
                    </li>
                    <li>
                        <i class="iconfont icon-navicon-dxmbwh"></i>
                        <span>评价送悠币</span>
                    </li>
                    <li>
                        <i class="iconfont icon-tianmaowuyoutuihuanhuo"></i>
                        <span>在线退换货</span>
                    </li>
                    <li>
                        <i class="iconfont icon-dingdanyichenggong"></i>
                        <span>全部订单</span>
                    </li>
                </ul>
            </div>
            <div class="lmain_b">
                <ul>
                    <li>
                        <i class="iconfont icon-wodeshouhuodizhi" style="color:red;"></i>
                        <span>收货地址</span>
                    </li>
                    <li>
                        <i class="iconfont icon-qiaquan" style="color:#FAAC42;"></i>
                        <span>充值卡</span>
                    </li>
                    <li>
                        <i class="iconfont icon-qiaquan1" style="color:#46AFCC;"></i>
                        <span>礼品兑换券</span>
                    </li>
                    <li>
                        <i class="iconfont icon-501" style="color:#A1D069;"></i>
                        <span>帮助中心</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <i class="iconfont icon-kefu" style="color:#EC96BE;"></i>
                        <span>客服电话</span>
                    </li>
                    <li>
                        <i class="iconfont icon-robot" style="color:#5D82E4;"></i>
                        <span> </span>
                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                </ul>
            </div>
        </div>
        <footComponent></footComponent>
    </div>
</template>

<script>
    import './home.css'
    import footComponent from '../footer/foot.vue'


    export default {
        components: {
           footComponent
        }

    }
</script>