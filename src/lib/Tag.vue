<template>
    <div :class="['fish-ui-tag',`fish-ui-tag-${size}`,`fish-ui-tag-${type}`]" :style="{color:color}" >
        <slot/>
    </div>
<!--    <div class="fish-ui-tag">-->
<!--        <slot></slot>-->
<!--    </div>-->
</template>

<script lang="ts">
    import {
        computed,
        ref,
        watchEffect,
        onMounted, SetupContext, Component
    } from 'vue'

    export default  {
        name: "Tag",
        props:{
            size:{
                type:String,
                default:'normal'
            },
            color:{
                type:String,
                default:'#1ABE96',
            },
            type:{
                type:String,
                default:''
            },
            closeable:{
                type:Boolean,
                default:false
            },
            effect:{
                type:String,
                default:'light'
            }

        },
        setup(props,context){
            console.log(props,context);
            console.log(Object.entries(props));
            // let s = ref(1)
            // console.log(s);
            //
            // return {
            //     s
            // }
        }
    }
</script>

<style lang="scss" scoped>
    $success:#1ABE96;
    $warn:#BC1A42;
    $info:#38879B;

    .fish-ui-tag{
        background-color: #ecf5ff;
        display: inline-block;
        height: 32px;
        padding: 0 10px;
        line-height: 30px;
        font-size: 12px;
        color: #409eff;
        border: 1px solid #d9ecff;
        border-radius: 4px;
        box-sizing: border-box;
        white-space: nowrap;
        &-success{
        }
        &-waring{
            background-color: #fdf6ec;
            border-color: #faecd8;
            color: $warn
        }
        &-danger{
            color: red;
        }
        &-info{
            background-color: #f4f4f5;
            border-color: #e9e9eb;
            color: #909399;
        }
    }

</style>