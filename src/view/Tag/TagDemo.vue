<template>
    <!--    <Tag>哈哈</Tag>-->
    <h1>Tag 示例</h1>
    <Demo :component="TagDemo1"></Demo>
</template>

<script lang="ts">
  import {ref} from 'vue'
  import {Tag} from "../../lib";
  import Demo from '../Demo.vue';
  import TagDemo1 from './TagDemo1.vue';

  export default {
    name: "TagDemo",
    components: {
      Tag,
      Demo
    },
    setup() {
      return {
        TagDemo1
      }
    }
  }
</script>

<style lang="scss">
    .tag-demo {
        .fish-ui-tag + .fish-ui-tag {
            margin-left: 16px;
        }
    }
</style>