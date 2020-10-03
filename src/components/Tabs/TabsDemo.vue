

<template>

<!--    <Tabs v-model:selected="x">-->
<!--        <Tab title="导航1">内容1</Tab>-->
<!--        <Tab title="导航2">内容2</Tab>-->
<!--    </Tabs>-->
    <h1>Tabs 示例</h1>
    <component :component="Demo" />
</template>

<script lang="ts">
    import {Tab,Tabs} from "../../lib/index"

    import Demo from '../Demo.vue'

    import {ref} from 'vue'
    export default {
        name:'TabsDemo',
        components:{
            Demo,
            Tabs,
            Tab,
        },
        setup(){
            const x = ref('导航2')
            return{
                x,
                Demo
            }
        }
    }

</script>