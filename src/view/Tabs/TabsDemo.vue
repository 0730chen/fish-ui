<template>
    <h1>Tabs 示例</h1>
    <div>

        <Demo :component="Tab1"></Demo>
    </div>
</template>

<script lang="ts">
  import Demo from '../Demo.vue'
  import Tab1 from './Tab1.vue'
  import {ref} from 'vue'

  export default {
    name: 'TabsDemo',
    components: {
      Demo,
    },
    setup() {
      const x = ref('导航2')
      return {
        x,
        Demo,
        Tab1
      }
    }
  }

</script>