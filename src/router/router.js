import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import home from '../components/home/home.vue'
import index from '../components/index/index.vue'
import details from '../components/details/details.vue'
import car from '../components/car/car.vue'
import login from '../components/home/login/login.vue'
import reg from '../components/home/reg/reg.vue'
import jiesuan from '../components/car/jiesuan/jiesuan.vue'
import dizhi from '../components/car/jiesuan/dizhi/dizhi.vue'

//金秋

import fenlei from '../components/fenlei/fenlei'
import jinkou from '../components/fenlei/jinkou/jinkou'
import guochan from '../components/fenlei/guochan/guochan'
import haixian from '../components/fenlei/haixian/haixian'
import jingxuan from '../components/fenlei/jingxuan/jingxuan'
import jipeng from '../components/fenlei/jipeng/jipeng'
import jiushui from '../components/fenlei/jiushui/jiushui'
import qinlei from '../components/fenlei/qinlei/qinlei'
import rupin from '../components/fenlei/rupin/rupin'
import shucai from '../components/fenlei/shucai/shucai'
import sushi from '../components/fenlei/sushi/sushi'
import zahuo from '../components/fenlei/zahuo/zahuo'










// 婷婷路由
import list from '../components/list/list'
import sale from '../components/sale/sale'
import newproduct from '../components/newproduct/newproduct'
import price from '../components/price/price'
import particulars from '../components/particulars/particulars'


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
        {path: '/jiesuan', component: jiesuan, name: 'jiesuan'},
        {path: '/dizhi', component: dizhi, name: 'dizhi'},
        // tt
        {path: '/list', component: list, name: 'list',children:[
            {path: '/sale', component: sale, name: 'sale'},
            {path: '/newproduct', component: newproduct, name: 'newproduct'},
            {path: '/price', component: price, name: 'price'}
        ]},

        {path: '/particulars', component: particulars, name: 'particulars'}, 
        //jinqiu
          {path: '/fenlei', component: fenlei, name: 'fenlei',children:[
            {path: 'jinkou', component: jinkou, name: 'jinkou'},
            {path: 'guochan', component: guochan, name: 'guochan'},
            {path: 'zahuo', component: zahuo, name: 'zahuo'},
            {path: 'haixian', component: haixian, name: 'haixian'},
            {path: 'jingxuan', component: jingxuan, name: 'jingxuan'},
            {path: 'jipeng', component: jipeng, name: 'jipeng'},
            {path: 'jiushui', component: jiushui, name: 'jiushui'},
            {path: 'qinlei', component: qinlei, name: 'qinlei'},
            {path: 'rupin', component: rupin, name: 'rupin'},
            {path: 'shucai', component: shucai, name: 'shucai'},
            {path: 'sushi', component: sushi, name: 'sushi'}
         ]},
        




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