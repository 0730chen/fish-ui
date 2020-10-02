<template>
    <div>
        <Button>你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
    </div>
</template>

<script lang="ts">
    import Button from './Buttons.vue'

    export default {
        name:'Demo',
        components:{Button},
        setup(){
        }
    }
</script>

<style lang="scss" scoped>

</style>