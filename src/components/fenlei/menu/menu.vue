<template>
    <ul>
    <li v-for="obj in menus" :key="obj.path">
    <router-link :to="obj.path">{{obj.text}}</router-link> 
        <!-- <li>我的资料</li>
        <li>交费明细</li>
        <li>参加考试</li>
        <li>学生考勤</li> -->
    </li>
    </ul>
</template>
<script type="text/javascript">
    export default{
        data(){
            return{
                menus:[
                    {path:'/fenlei/jinkou',text:'进口水果'},
                    {path:'/fenlei/guochan',text:'国产水果'},

                    {path:'/fenlei/jingxuan',text:'精选肉类'},
                    {path:'/fenlei/qinlei',text:'禽类蛋品'},
                    {path:'/fenlei/haixian',text:'海鲜水产'},
                    {path:'/fenlei/jipeng',text:'即烹美食'},

                    {path:'/fenlei/rupin',text:'乳品糕点'},
                    {path:'/fenlei/shucai',text:'新鲜蔬菜'},
                    {path:'/fenlei/sushi',text:'方便速食'},
                    {path:'/fenlei/zahuo',text:'粮油杂货'},
                    {path:'/fenlei/jiushui',text:'饮料酒水'}
                ]
            }
        }
    }
</script>