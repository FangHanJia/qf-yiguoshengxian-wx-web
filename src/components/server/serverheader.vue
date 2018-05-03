<template>
    <div>
        <div class="show_time">
            <p>
                <span>{{time.year}}</span>    
                <span>{{time.month}}</span> 
                <span>{{time.date}}</span>   
                <span>{{time.day}}</span>   
                <span>{{time.hours}}</span> 
                <span>{{time.min}}</span> 
                <span>{{time.sec}}</span>  
            </p>
        </div>
        <h3>易果生鲜后台管理系统V1.0</h3>
        <ul class="show_user">
            <li><h1></h1></li>
            <li>
                {{data.username}}
            </li>
            <li>
                <span @click="logout">退出</span>
            </li>
            <li>
                <span id="theme">换肤</span>
                <ul class="style" id="style">
                    <li @click="blue">官方蓝</li>
                    <li @click="green">官方绿</li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    import router from '../../router/router.js';


    export default{
        data(){
            return {
                data:{
                    username:''
                },
                time:{year:'',month:'',date:'',day:'',hours:'',min:'',sec:''}
            }
        },
        mounted(){
            this.data.username = window.localStorage.getItem('_username');
            let $theme = $('#theme');
            let $style = $('#style');
            $theme.on('mouseover',function(){
                $style.slideDown(function(){
                    $(this).on('mouseleave',function(){
                        $style.slideUp();
                    })
                });
            });

            // 封一个显示时间函数
            var showTime = ()=>{
                var week = '天，一，二，三，四，五，六'.split('，');
                var d = new Date();
                var year = d.getFullYear();
                var month = d.getMonth() +1;
                var date = d.getDate();
                var day = d.getDay();
                var hours = d.getHours();
                var min = d.getMinutes();
                var sec = d.getSeconds();

                // 补零操作
                min = min < 10 ? '0'+min : min;
                sec = sec < 10 ? '0'+sec : sec;

                // 将数据绑定到节点上
                this.time.year = year+' 年';
                this.time.month = month+' 月';
                this.time.date = date+' 日';
                this.time.day = '星期'+week[day];
                this.time.hours = hours+' :';
                this.time.min = min+' :';
                this.time.sec = sec;
            }
            showTime();
            // 实时走秒
            setInterval(showTime,1000);
        },
        methods:{
            logout(){
                this.data.username = window.localStorage.removeItem('_username');
                router.push({name:'serverlogin'})
            },
            green(){
                $('#hd').removeClass('hd');
                $('#ft').removeClass('foot');

                $('#hd').addClass('hd_green');
                $('#ft').addClass('foot_green');
            },
            blue(){
                $('#hd').removeClass('hd_green');
                $('#ft').removeClass('foot_green');

                $('#hd').addClass('hd');
                $('#ft').addClass('foot');
            }
        }
    }
</script>