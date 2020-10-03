<template>
    <div>
        Demo
    </div>
</template>

<script lang="ts">
import Button from '../lib/Buttons.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'

import {computed,ref} from 'vue'

const  Prism = (window as any).Prism

    export default  {
        name: "PrismjsDemo",
        components:{
            Button
        },
        props:{
            component:Object
        },
        setup(){
            const html = computed(()=>{
                return Prism.highlight(props.component._sourceCode,Prism.languages.html,'html')
            })
            const codeVisible = ref(false)
            const showCode = ()=>{
                codeVisible.value  = true
            }
            const hideCode = ()=>{
                codeVisible.value = false
            }
            return {
                Prism,
                html,
                codeVisible,
                showCode,
                hideCode
            }
        }
    }
</script>

<style lang="scss" scoped>


</style>