<template>
    <button class="fish-switch" @click="toggle" :class="{'fish-checked':value}">
        <span></span>
    </button>
</template>

<script lang="ts" setup="props,context">

    //setUpContext是一个类型
    import{ref,SetupContext } from 'vue'
    declare const props:{value:Boolean}
    declare const context:SetupContext
    export default {
        name: "Switch",
        props:{
            value:Boolean
        }
    }
    export const toggle = ()=>{
        context.emit("update:value",!props.value)
    }
</script>

<style lang="scss">

    $h:22px;
    $h2:$h -4px;
    .fish-switch{
        height:$h;
        width:$h*2;
        border:none;
        background:#bfbfbf;

    }

</style>