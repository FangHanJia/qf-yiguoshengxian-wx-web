<template>
    <div id="dizhi">
        <ul>
            <li>收件人姓名:<input type="text"></li>
            <li>手机号码:<input type="text"></li>
            <li>请填写省:<input type="text"><em class="iconfont icon-icon--"></em></li>
            <li>请填写市:<input type="text"><em class="iconfont icon-icon--"></em></li>
            <li>请填写区:<input type="text"><em class="iconfont icon-icon--"></em></li>
            <li>详细地址:<input type="text"></li>
            <li>地址类型:<input type="radio" id="gs" name="duo"><label for="gs">公司</label>
                         <input type="radio" id="jt" name="duo"><label for="jt">家庭</label>
            </li>
            <li>设为默认地址<i>√</i></li>
        </ul>

        <span>保存地址</span>
    </div>
</template>

<script>
    import './dizhi.css'

    export default{}


</script>