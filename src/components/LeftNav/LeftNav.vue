<template>
    <div class="left-nav" ref="tree" :style="mobileStyle">
        <router-link to="/intro">快速上手</router-link>
        <router-link to="/tabs">Tabs组件</router-link>
        <router-link to="/demo">Demo组件</router-link>
        <router-link to="/switch">Switch组件</router-link>
        <router-link to="/dialog">Dialog组件</router-link>
        <router-link to="/tag">Tags组件</router-link>
        <router-link to="/checkbox">CheckBox组件</router-link>
        <router-link to="/select">Select组件</router-link>
        <router-link to="/icon">Icon组件</router-link>
        <router-link to="/input">Input组件</router-link>
        <router-link to="/message">Message组件</router-link>
    </div>
</template>

<script lang="ts">
  import {ref,inject,computed,onMounted} from 'vue'
  export default {
    name: "LeftNav",
    setup(){
      const menuVisible = inject<Ref<boolean>>("menuVisible");
      const tree = ref(null)

      onMounted(()=>{
        console.log(tree.value.style)
        if(menuVisible.value) {
          tree.value.style.marginLeft = '0px'
        }else {
          tree.value.style.marginLeft = '-200px'
        }
      })
      let mobileStyle = computed(()=>{
        console.log('菜单组件',menuVisible.value);
        if(menuVisible.value){
          return{
            marginLeft:'0px'
          }
        }else {
          return {
            marginLeft: '-200px'
          }
        }
      })

      return{mobileStyle,menuVisible,tree}
    }
  }
</script>

<style lang="scss" src="./index.scss" scoped></style>