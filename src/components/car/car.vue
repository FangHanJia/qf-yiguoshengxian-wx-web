<template>
    <div id="car">
        <h1>car</h1>
        <footComponent></footComponent>
    </div>
</template>

<script>
    import footComponent from '../footer/foot.vue'
    import './car.css'
    export default{
        components: {
           footComponent
        }
    }


</script>