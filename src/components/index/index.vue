<template>
    <div id="index">
        <h1>index</h1>
        <footComponent></footComponent>
    </div>
</template>

<script>
    import footComponent from '../footer/foot.vue'
    import './index.css'
    export default{
        components: {
           footComponent
        }
    }


</script>