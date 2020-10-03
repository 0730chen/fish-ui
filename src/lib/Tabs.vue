<template>
    <div>

    </div>
</template>

<script lang="ts">
    import Tab from './Tab.vue'
    import {
        computed,
        ref,
        watchEffect,
        onMounted, SetupContext, Component
    } from 'vue'

    declare const props:{selected:string }
    declare const context:SetupContext

    export default {
        props:{
            selected:{
                type:String
            }
        }

    }
    export const selectedItem = ref < HTMLDivElement > (null)
    export const indicator = ref < HTMLDivElement > (null)
    export const container = ref < HTMLDivElement > (null)

    onMounted(()=>{
        watchEffect(()=>{
            const {width} = selectedItem.value.getBoundingClientRect()
            indicator.value.style.width = width+'px'
            const {left:left1}  =container.value.getBoundingClientRect()
            const {
                left: left2
            } = selectedItem.value.getBoundingClientRect()

            const left = left2-left1
            indicator.value.style.left = left+'px'
        },{flush:'post'})
    })

    export const defaults = context.slots.default()
    defaults.forEach((tag)=>{
        if((tag.type as Component).name !== Tab.name){
            throw new Error('Tabs的子标签必须是tab')
        }
    })
</script>

<style lang="scss" scoped>

</style>