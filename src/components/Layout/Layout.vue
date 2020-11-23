<template>
    <div class="container-warp">
        <TopNav></TopNav>
        <LeftNav ref="mobileMenu"></LeftNav>
        <div class="layout-warp">
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