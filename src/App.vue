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
    const menuVisible = ref(false)
    provide('menuVisible',menuVisible)
  }

}
</script>
