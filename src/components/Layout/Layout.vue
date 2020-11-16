<template>
    <div class="container-warp">
        <TopNav></TopNav>
        <div class="layout-warp">
            <LeftNav></LeftNav>
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script lang="ts">
  import TopNav from "../TopNav/TopNav.vue";
  import LeftNav from "../LeftNav/LeftNav.vue";

  export default {
    name: 'Layout',
    components: {LeftNav, TopNav},
  }
</script>