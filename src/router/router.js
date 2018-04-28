import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import home from '../components/home/home.vue'
import index from '../components/index/index.vue'
import details from '../components/details/details.vue'
import car from '../components/car/car.vue'

const router = new VueRouter({
    routes: [
        {path: '/home', component: home, name: 'home'},
        {path: '/', component: index, name: 'index'},
        {path: '/details', component: details, name: 'details'},
        {path: '/car', component: car, name: 'car'}
    ]
})

export default router;