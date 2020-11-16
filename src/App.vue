<template>
  <router-view></router-view>
</template>

<script>
import Layout from './components/Layout/Layout.vue'
import HelloWorld from "./view/Home.vue";
export default {
  name: 'HomePage',
  components: {
    Layout,
    HelloWorld,
  }
}
</script>
