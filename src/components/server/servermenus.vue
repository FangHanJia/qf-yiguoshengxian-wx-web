<template>
    <ul class="menus">
        <li v-for="obj in menus">
            <router-link :to='obj.path'>{{obj.text}}</router-link>
        </li>
        
    </ul>
</template>

<script>
    export default {
        data(){
            return {
                menus:[
                    {path:'/serverhome/user',text:'用户管理'},
                    {path:'/serverhome/goods',text:'商品管理'}
                ]
            }
        }
    }
</script>