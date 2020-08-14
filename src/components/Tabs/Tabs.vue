<template>
    <div>标题</div>
    <div v-for="p in panes">
<!--        <component :is=""></component>-->
        <button @click="setTab(p)">{{p.title}}</button>
    </div>
    <component :is="x"></component>
</template>

<script lang="ts">
    import Tabs from "../HelloWorld.vue";
    import {ref} from 'vue'

   type Props = {
       panes: any[]
    }
    export default {
        components: {Tabs},
        props:{
            panes:Array
        },
        setup(props: Props){
            const x = ref(props.panes[0].content)
            console.log(x)
            console.log(props.panes);
            const setTab = (p:any)=>{
                x.value = p.content
            }
            console.log(props)
            return {x,setTab}
        }
    }
</script>
