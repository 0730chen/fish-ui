<template>
    <div>
        <Demo :component="ButtonDemo1"></Demo>
        <Demo :component="ButtonDemo2"></Demo>
    </div>
</template>


<script lang="ts">
    import Demo from "../Demo.vue";
    import ButtonDemo1 from './ButtonDemo1.vue';
    import ButtonDemo2 from './ButtonDemo2.vue';
    export default {
        name:'ButtonDemo',
        components:{Demo},
        setup(){

          return {
            ButtonDemo1,
            ButtonDemo2
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>