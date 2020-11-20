<template>
  <router-view></router-view>
</template>

<script>
import Layout from './components/Layout/Layout.vue'
import HelloWorld from "./view/Home.vue";
import {ref,provide} from 'vue'
export default {
  name: 'HomePage',
  components: {
    Layout,
    HelloWorld,
  },
  setup(){
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width > 500)
    provide('menuVisible',menuVisible)
    document.addEventListener('click',()=>{
      console.log('一个全局事件')
    })
  }

}
</script>
