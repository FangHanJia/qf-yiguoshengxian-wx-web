<template>
    <div id="details">
        <h1>详情</h1>
        <footComponent></footComponent>
    </div>
</template>

<script>
    import footComponent from '../footer/foot.vue'
    import './details.css'
    export default{
        components: {
           footComponent
        }
    }


</script>