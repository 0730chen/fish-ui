<template>
    <div>
        消息组件
    </div>
</template>

<script lang="ts">
    import {ref,computed} from 'vue'
  export default{
    name: "Message",
    props:{
      type:{
        type:String,
        default:'success'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>