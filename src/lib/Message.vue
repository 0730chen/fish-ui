<template>
    <div class="fish-message" v-if="visible">
        xxxx
        <slot name="content"></slot>
    </div>
</template>

<script lang="ts">
    import {ref,computed,onMounted} from 'vue'
  export default{
    name: "Message",
    props:{
      type:{
        type:String,
        default:'success'
      },
      visible:{
        type:Boolean,
        default:false
      }
    },
    setup(props,context){
      onMounted(()=>{
        console.log(props.visible);
        context.emit('update:visible')
      })
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