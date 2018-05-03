<template>
    <div id="reg">
        <form>
            <ul>
                <li>
                    <input type="text" placeholder="请输入您的手机号" v-model="data.username">
                </li>
                <li>
                    <input type="text" placeholder="请输入您的验证码" v-model="yzm">
                    <i v-text="this.code" @click="codes"></i>
                </li>
                <li>
                    <input type="password" placeholder="请设定您的密码" v-model="data.password">
                </li>
                <li>
                    <input type="password" placeholder="请再次输入您的密码" v-model="psd">
                </li>
                <li>
                    <input type="text" placeholder="注册邀请码（选填）">
                </li>
            </ul>
            <div class="boxx">
                <em @click="reg">注册</em>
                <p>点击注册，即代表同意<a href="javascript:;">《易果服务协议》</a></p>
            </div>
        </form>
        <div class="log">
            <span></span>
        </div>
        <div id="tanchuang" v-show="show">
            <p v-text="cuowu"></p>
            <em @click="yinc">确定</em>
        </div>
    </div>
</template>

<script>
    import './reg.css'
    import http from '../../../utils/httpclient.js'
    import router from '../../../router/router.js'

    export default{
        data(){
            return {
                code:'点击刷新',
                data:{
                        username:'',
                        password:''
                    },
                show:false,
                yzm:'',
                cuowu:'',
                psd:''
            }
        },
        methods: {
            reg(){
                let regu = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
                if(!regu.test(this.data.username)){
                    this.show = true
                    this.cuowu = '您输入的手机号有误！'
                    return ;
                }

                if(this.yzm !== this.code){
                    this.show = true
                    this.cuowu = '您输入的验证码有误！'
                    return ;
                }

                let regp = /^\S{6,16}$/;
                if(!regp.test(this.data.password)){
                    this.show = true
                    this.cuowu = '密码应为6-16个英文字母、数字符号！'
                    return ;
                }

                if(this.psd !== this.data.password){
                    this.show = true
                    this.cuowu = '请输入相同的密码！'
                    return ;
                }

                http.post('register',this.data).then((res) =>{
                    if(res.status){
                        router.push({name:'login'});
                    } else{
                        this.show = true
                    }
                })
            },
            codes(){
                this.code = ''
                for(var i=0;i<4;i++){
                    var num = parseInt(Math.random()*10);
                    this.code+=num;
                }
            },
            yinc(){
                this.show = false
            }
        }
    }

</script>