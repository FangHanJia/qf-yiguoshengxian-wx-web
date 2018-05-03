<template>
    <div>
        <div class="login" id="login">
            <div class="center">
                <h3>后台管理系统</h3>
                <div class="form">
                    <div class="form-group">
                        <label for="username">用户名：</label>
                        <input type="text" class="form-control" id="username" placeholder="请输入您的用户名" v-model="data.username">
                    </div>
                    <div class="form-group">
                        <label for="password">密码：</label>
                        <input type="password" class="form-control" id="password" placeholder="请输入您的密码" v-model="data.password">
                    </div>
                    <button type="button" class="btn btn-success" id="btn_login" @click="login">登陆</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import '../css/serverlogin.css';
    import http from '../../utils/httpclient.js';
    export default {
        data(){
            return {
                data:{
                    username:'',
                    password:''
                }
            }
        },
        methods:{
            login(){
                http.post('admin', this.data).then((res) => {
                    // 更改管理员集合
                    if(res.status){
                        let _username = res.data[0].username;
                        window.localStorage.setItem('_username',_username); 
                        this.$router.push({name:'serverhome'});    
                    }else{
                        this.data.username = '';
                        this.data.password = '';
                        alert('密码错误');
                    }
                }) 
            }
        }
    }
</script>
