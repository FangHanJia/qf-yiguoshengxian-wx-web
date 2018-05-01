<template>
    <div id="login">
        <form>
            <ul>
                <li>
                    <i class="iconfont icon-wode"></i>
                    <input type="text" placeholder="请输入您的用户名">
                </li>
                <li>
                    <i class="iconfont icon-mimaxianxing"></i>
                    <input type="text" placeholder="请输入您的密码">
                </li>
                <li>
                    <input type="text" placeholder="请输入验证码">
                    <span>1234</span>
                </li>
            </ul>
            <p>忘记密码?</p>
            <div class="lr">
                <button>登录</button>
                <button><router-link to="/reg">立即注册</router-link></button>
            </div>
            <div class="sanfang">
                <p>----------&nbsp;合作帐号登录----------&nbsp;</p>
                <em class="qq"></em>
                <em class="wb"></em>
            </div>
        </form>
        <div class="log">
            <span></span>
        </div>
    </div>
</template>

<script>

    import './login.css'
    export default{}

</script>