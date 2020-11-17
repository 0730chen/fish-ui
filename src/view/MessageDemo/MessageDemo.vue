<template>
    <div>
        <Buttons @click="openMesage">打开消息提示</Buttons>
    </div>
</template>

<script lang="ts">
  import {Buttons} from "../../lib";
  import {openMessage} from "../../lib/openMessage";

  export default {
    name: "MessageDemo",
    components:{Buttons},
    setup(){
      let openMessage =()=>{

      }
      return {
        openMessage
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>