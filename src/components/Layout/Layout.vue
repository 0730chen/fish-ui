<template>
    <div class="container-warp">
        <TopNav></TopNav>
        <div class="layout-warp">
            <LeftNav ref="mobileMenu"></LeftNav>
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script lang="ts">
  import TopNav from "../TopNav/TopNav.vue";
  import LeftNav from "../LeftNav/LeftNav.vue";

  import {inject,ref} from 'vue'
  export default {
    name: 'Layout',
    components: {LeftNav, TopNav},
    setup(){
      const menuVisible = inject<Ref<boolean>>("menuVisible"); // get

      const mobileMenu = ref(null)

      console.dir(mobileMenu);
      return {menuVisible,mobileMenu}
    }
  }
</script>