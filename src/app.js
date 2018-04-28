import Vue from 'vue';

import router from './router/router'

import appComponent from './components/app/app.vue'

new Vue({
    el: '#app',
    router,
    render: h => h(appComponent)
})