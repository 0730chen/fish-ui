<template>
    <div>
        <Buttons @click="toggle">打开消息提示</Buttons>
    </div>
    <Message v-model:visible="x">
        <template v-slot:content>打开消息提示</template>
    </Message>
</template>

<script lang="ts">
  import {Buttons} from "../../lib";
  import {openMessage} from "../../lib/openMessage";
  import {Message} from "../../lib";
  import {ref} from 'vue'

  export default {
    name: "MessageDemo",
    components: {Buttons, Message},
    setup() {
      let x = ref(false)
      let toggle = () => {
        console.log('hahah ')
        x.value = !x.value
        openMessage('xxxxx')
        console.log(x.value);
      }
      return {
        x,
        toggle
      }
    }

  }
</script>

<style lang="scss" scoped>

</style>