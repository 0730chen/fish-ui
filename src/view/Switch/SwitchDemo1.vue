<demo>常规用法</demo>
<template>
    <Switch v-model:value="bool"></Switch>
</template>

<script lang="ts">
  import Switch from "../../lib/Switch.vue";
  import {ref} from 'vue'

  export default {
    name: "SwitchDemo1",
    components: {Switch},
    setup() {
      const bool = ref(false)
      return {
        bool
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>