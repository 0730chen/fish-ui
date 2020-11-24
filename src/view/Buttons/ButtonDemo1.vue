<demo>
    常规用法
</demo>
<template>
    <div>
        <Button>你好</Button>
        <Button theme="link" size="large">你好</Button>
        <Button theme="text">你好</Button>
    </div>
</template>

<script lang="ts">

    import {Button} from '../../lib/index';

  export default {
    name: "ButtonDemo1",
    components:{Button}
  }
</script>

<style lang="scss" scoped>

</style>