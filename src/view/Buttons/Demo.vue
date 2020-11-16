<template>
    <div>
        <Buttons>你好</Buttons>
        <Buttons theme="link" size="large">你好</Buttons>
        <Buttons theme="text">你好</Buttons>
    </div>
</template>

<script lang="ts">
    import {Buttons} from "../../lib";
    export default {
        name:'Demo',
        components:{Buttons},
        setup(){
        }
    }
</script>

<style lang="scss" scoped>

</style>