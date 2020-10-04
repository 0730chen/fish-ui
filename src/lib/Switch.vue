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
    $h: 22px;
    $h2: $h - 4px;
    .fish-switch {
        height: $h; width: $h * 2; border: none; background: #bfbfbf; border-radius: $h/2; position: relative;
        > span {
            position: absolute; top: 2px; left: 2px; height: $h2; width: $h2; background: white; border-radius: $h2 / 2; transition: all 250ms;
        }
        &.fish-checked { background: #1890ff;
            > span { left: calc(100% - #{$h2} - 2px); }
        }
        &:focus { outline: none; }
        &:active {
            > span { width: $h2 + 4px; }
        }
        &.fish-checked:active {
            > span { width: $h2 + 4px; margin-left: -4px; }
        }
    }

</style>