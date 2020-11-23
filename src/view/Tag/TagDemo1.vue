<demo>
    常规用法
</demo>
<template>
    <div>
        <Tag>标签一</Tag>
        <Tag color="red">标签二</Tag>
        <Tag type="waring">标签三</Tag>
        <Tag size="medium">中等标签</Tag>
        <Tag size="small">小型标签</Tag>
    </div>
</template>

<script lang="ts">
  import {Tag} from "../../lib";
  export default  {
    name: "TagDemo1",
    components:{Tag}
  }
</script>

<style lang="scss" scoped>

</style>