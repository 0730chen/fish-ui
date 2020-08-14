<template>
    <div>
    </div>
    <Tabs :panes="[
    {title:'标题一',content:Tabs1},
    {title:'标题二',content: Tabs2}
    ]"></Tabs>
</template>
<script>
    import Tabs from "./Tabs.vue";
    import Tabs1 from './Tab1.vue'
    import Tabs2 from "./Tab2.vue";
    export default {
        name:'TabsDemo',
        components: {Tabs},
        setup(){
            return {Tabs1,Tabs2}
        }
    }
</script>