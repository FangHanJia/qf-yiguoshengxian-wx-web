<template>
    <div id="login">
        <div class="form">
            <ul>
                <li>
                    <i class="iconfont icon-wode"></i>
                    <input type="text" placeholder="请输入您的用户名" v-model="data.username">
                </li>
                <li>
                    <i class="iconfont icon-mimaxianxing"></i>
                    <input type="password" placeholder="请输入您的密码" v-model="data.password">
                </li>
                <li>
                    <input type="text" placeholder="请输入验证码" v-model="yzm">
                    <span v-text="code" @click="codes"></span>
                </li>
            </ul>
            <p>忘记密码?</p>
            <div class="lr">
                <button @click="login">登录</button>
                <button><router-link to="/reg">立即注册</router-link></button>
            </div>
            <div class="sanfang">
                <p>----------&nbsp;合作帐号登录----------&nbsp;</p>
                <em class="qq"></em>
                <em class="wb"></em>
            </div>
        </div>
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

    import './login.css'
    import http from '../../../utils/httpclient.js'
    import router from '../../../router/router.js'

    export default{
        data(){
            return {
                data:{
                    username:'',
                    password:''
                },
                show:false,
                code:'点击刷新',
                yzm:'',
                cuowu:''
            }
        },
        methods:{
            codes(){
                this.code = ''
                for(var i=0;i<4;i++){
                    var num = parseInt(Math.random()*10);
                    this.code+=num;
                }
            },
            login(){    
                if(this.yzm !== this.code){
                    this.show = true
                    this.cuowu = '您输入的验证码有误！'
                    return ;
                }

                http.post('login',this.data).then((res) =>{
                    if(res.status){
                        window.localStorage.setItem('token',res.data.token)
                        window.localStorage.setItem('username',res.data.username)

                        router.push({name:'home'});
                    } else {
                        this.show = true
                        this.cuowu = '用户名或密码错误！'
                    }
                })
            },
            yinc(){
                this.show = false
            }
        }
    }

</script>