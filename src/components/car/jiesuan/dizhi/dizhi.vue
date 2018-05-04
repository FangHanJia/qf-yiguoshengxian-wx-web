<template>
    <div id="dizhi">
        <ul>
            <li>收件人姓名:<input type="text" v-model="profile.receiver"></li>
            <li>手机号码:<input type="text" v-model="profile.username"></li>
            <li>请填写省:<input type="text" v-model="profile.province"><em class="iconfont icon-icon--"></em></li>
            <li>请填写市:<input type="text" v-model="profile.city"><em class="iconfont icon-icon--"></em></li>
            <li>请填写区:<input type="text" v-model="profile.region"><em class="iconfont icon-icon--"></em></li>
            <li>详细地址:<input type="text" v-model="profile.address"></li>
            <li>地址类型:<input type="radio" id="gs" name="duo"><label for="gs">公司</label>
                         <input type="radio" id="jt" name="duo"><label for="jt">家庭</label>
            </li>
            <li>设为默认地址<i>√</i></li>
        </ul>

        <span @click="btn_save">保存地址</span>
    </div>
</template>

<script>
    import './dizhi.css'
    import http from '../../../../utils/httpclient.js'
    import router from '../../../../router/router.js'

    export default{
        data(){
            return {
                profile:{
                    receiver:'',
                    username:'',
                    province:'',
                    city:'',
                    region:'',
                    address:''
                }
            }
        },
        methods: {
            btn_save(){
                http.post('update',this.profile).then((res) =>{
                    if(res.status){
                        window.localStorage.setItem('mz',res.data.receiver);
                        window.localStorage.setItem('dizhi',res.data.address);

                        router.push({name:'jiesuan'})
                    }
                })
            }
        }
    }


</script>