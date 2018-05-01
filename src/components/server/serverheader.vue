<template>
    <div>
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
                }
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
            })
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