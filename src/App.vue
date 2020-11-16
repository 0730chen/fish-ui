<template>
  <router-view></router-view>
</template>

<script>
import Layout from './view/Layout/Layout.vue'
import HelloWorld from "./components/Home.vue";
export default {
  name: 'HomePage',
  components: {
    Layout,
    HelloWorld,
  }
}
</script>
