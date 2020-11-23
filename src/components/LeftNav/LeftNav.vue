<template>
    <div class="left-nav" ref="tree" :style="mobileStyle">
        <router-link to="/doc/intro">介绍</router-link>
        <router-link to="/doc/install">安装</router-link>
        <router-link to="/doc/get-started">开始使用</router-link>
        <router-link to="/doc/tabs">Tabs组件</router-link>
        <router-link to="/doc/demo">Demo组件</router-link>
        <router-link to="/doc/switch">Switch组件</router-link>
        <router-link to="/doc/dialog">Dialog组件</router-link>
        <router-link to="/doc/tag">Tags组件</router-link>
        <router-link to="/doc/checkbox">CheckBox组件</router-link>
        <router-link to="/doc/select">Select组件</router-link>
        <router-link to="/doc/icon">Icon组件</router-link>
        <router-link to="/doc/input">Input组件</router-link>
        <router-link to="/doc/message">Message组件</router-link>
    </div>
</template>

<script lang="ts">
  import {ref, inject, computed, onMounted, nextTick} from 'vue'

  export default {
    name: "LeftNav",
    setup() {
      const menuVisible = inject<Ref<boolean>>("menuVisible");
      const tree = ref(null)

      onMounted(() => {
        console.log(tree.value.style)
        if (menuVisible.value) {
          tree.value.style.marginLeft = '0px'
        } else {
          tree.value.style.marginLeft = '-200px'
        }
      })
      let mobileStyle = computed(() => {
        console.log('菜单组件', menuVisible.value);
        if (menuVisible.value) {
          return {
            marginLeft: '0px'
          }
        } else {
          return {
            marginLeft: '-200px'
          }
        }
      })
      const width = document.documentElement.clientWidth
      // document.addEventListener('click', () => {
      //   nextTick(() => {
      //     if (menuVisible.value && tree.value) {
      //       if (width <= 500) {
      //         tree.value.style.marginLeft = '-200px'
      //       }
      //     }
      //   })
      // })

      return {mobileStyle, menuVisible, tree}
    }
  }
</script>

<style lang="scss" src="./index.scss" scoped></style>