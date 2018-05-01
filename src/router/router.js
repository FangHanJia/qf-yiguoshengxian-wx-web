import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import home from '../components/home/home.vue'
import index from '../components/index/index.vue'
import details from '../components/details/details.vue'
import car from '../components/car/car.vue'
import login from '../components/home/login/login.vue'
import reg from '../components/home/reg/reg.vue'


// 服务端路由
import serverlogin from '../components/server/serverlogin.vue';
import serverhome from '../components/server/serverhome.vue';
import serveruser from '../components/server/serveruser.vue';
import servergoods from '../components/server/servergoods.vue';
const router = new VueRouter({
    routes: [
        {path: '/home', component: home, name: 'home'},
        {path:'/login',component:login,name:'login'},
        {path:'/reg',component:reg,name:'reg'},
        {path: '/', component: index, name: 'index'},
        {path: '/details', component: details, name: 'details'},
        {path: '/car', component: car, name: 'car'},
        // 服务端路由
        {path:'/serverlogin',component:serverlogin,name:'serverlogin'},
        {
            path:'/serverhome',
            component:serverhome,
            name:'serverhome',
            children:[
                {path:'/serverhome/user',component:serveruser,name:'serveruser'},
                {path:'/serverhome/goods',component:servergoods,name:'servergoods'}
            ]
        }
    ]
})

export default router;