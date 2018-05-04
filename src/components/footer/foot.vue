<template>
    <div id="foot">
        <router-link to="/">
            <li ref="index"><i class="iconfont icon-shouye"></i><span>首页</span></li>
        </router-link>
        <router-link to="/fenlei/jinkou">
        <li ref="fenlei"><i class="iconfont icon-fenlei"></i><span>分类</span></li>
        </router-link>
        <router-link to="/car">
        <li ref="car"><i class="iconfont iconfont icon-gouwuchekong"></i><span>购物车</span></li>
        </router-link>
        <router-link to="/home"> 
        <li ref="home"><i class="iconfont iconfont icon-gaiicon-"></i><span>我的易果</span></li>
        </router-link>
    </div>
</template>

<script>

    import './foot.css'

    export default{
        mounted(){
            // console.log(this.$router.history.current.path)
                if(this.$router.history.current.path=='/'){
                    // console.log(this.$refs.index);
                    this.$refs.index.classList.add('active');

                }else if(this.$router.history.current.path=='/fenlei'){
                     this.$refs.fenlei.classList.add('active');
                }else if(this.$router.history.current.path=='/details'){
                     this.$refs.details.classList.add('active');
                }else if(this.$router.history.current.path=='/car'){
                     this.$refs.car.classList.add('active');
                }else if(this.$router.history.current.path=='/home'){
                     this.$refs.home.classList.add('active');
                }
        }
    }

</script>