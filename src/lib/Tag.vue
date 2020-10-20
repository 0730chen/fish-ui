<template>
    <slot/>
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
                default:'1ABE96',
            },
            type:{
                type:String,
                default:'success'
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
        setup(props){
            console.log(props);
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
        &-success{
            background-color: $success;
        }
        &-info{
            background: $info;
        }
    }

</style>