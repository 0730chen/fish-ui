<template>
    <div class="fish-message">

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
    .fish-message{
        position: fixed;
        top: 0;
        left: 0;

    }
</style>