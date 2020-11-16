<template>
    <div>标题</div>
    <div v-for="p in panes" :ref="(el) => buttons[i] = el">
<!--        <component :is=""></component>-->
        <div>
            <button :class="p.title" @click="setTab(p)">{{p.title}}</button>
        </div>
    </div>
    <component :is="x">1111</component>
    <component is="p">我是一个p标签</component>
    <component is="button">按钮</component>
</template>

<script lang="ts">
    import Tabs from "../HelloWorld.vue";
    import {ref, onMounted} from 'vue'

    //is用于指定组件的渲染
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
            console.log(x.value)
            console.log(props.panes);
            const setTab = (p:any)=>{
                x.value = p.content
            }
            const buttons = ref<HTMLElement[]>([])
            //组件挂载
            onMounted(()=>{
                console.log(buttons)
                // const button[index]:HTMLElement = buttons.value[0]
                // console.log(button0);
                // // button0
                // const width = button0.getBoundingClientRect()
                // console.log(width)
            })
            return {x,setTab,buttons}
        }
    }
</script>
