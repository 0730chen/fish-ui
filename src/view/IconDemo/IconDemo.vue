<template>
    <div class="icon-demo">
        <Demo :component="IconDemo1"></Demo>
    </div>
</template>

<script lang="ts">
    import Demo from "../Demo.vue";
    import IconDemo1 from './IconDemo1.vue';
    export default {
    name: "IconDemo",
    components:{Demo},
    setup(props){
      console.log(props)
      return {
        IconDemo1
      }
    }
  }
</script>

<style lang="scss" scoped>
.icon-demo{
    width: 100%;
    margin-top: 80px;
    display: flex;
}

</style>