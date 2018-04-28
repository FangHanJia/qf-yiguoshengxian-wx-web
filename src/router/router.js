import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import home from '../components/home/home.vue'

const router = new VueRouter({
    routes: [
        {path: '/home', component: home, name: 'home'}
    ]
})

export default router;