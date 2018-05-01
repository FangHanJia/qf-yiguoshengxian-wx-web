<template>
    <div id="reg">
        <form>
            <ul>
                <li>
                    <input type="text" placeholder="请输入您的手机号">
                </li>
                <li>
                    <input type="text" placeholder="请输入您的验证码">
                    <i v-text="code"></i>
                </li>
                <li>
                    <input type="text" placeholder="请设定您的密码">
                </li>
                <li>
                    <input type="text" placeholder="请再次输入您的密码">
                </li>
                <li>
                    <input type="text" placeholder="注册邀请码（选填）">
                </li>
            </ul>
            <div class="boxx">
                <em>注册</em>
                <p>点击注册，即代表同意<a href="javascript:;">《易果服务协议》</a></p>
            </div>
        </form>
        <div class="log">
            <span></span>
        </div>
    </div>
</template>

<script>
    import './reg.css'
    export default{
        data(){
            return {
                code:'',
            }
        },
        code(){

        }
    }

</script>