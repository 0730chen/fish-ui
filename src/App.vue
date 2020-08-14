<template>
  <router-link to="/">首页</router-link>
  <router-link to="/tabs">标签页</router-link>
  <Layout></Layout>
</template>

<script>
import Layout from './view/Layout/Layout.vue'

export default {
  name: 'HomePage',
  components: {
    Layout
  }
}
</script>
