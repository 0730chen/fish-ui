<template>
    <div class="fish-ui-switch">
        <h1>Switch组件示例</h1>
        <Demo :component="SwitchDemo1"></Demo>
        <Demo :component="SwitchDemo2"></Demo>
    </div>
</template>

<script lang="ts">
  import Demo from "../Demo.vue";
  import {ref} from 'vue'
  import SwitchDemo1 from "./SwitchDemo1.vue";
  import SwitchDemo2 from "./SwitchDemo2.vue";

  export default {
    name: "SwitchDemo",
    components: {Demo},
    setup() {
      return {
        SwitchDemo1,
        SwitchDemo2
      }
    }
  }
</script>

<style lang="scss" scoped>
    .fish-ui-switch {
        display: flex;
        flex-direction: column;
    }
</style>