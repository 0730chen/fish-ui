<template>
    <Input v-model="input" placeholder="请输入内容"></Input>
</template>

<script lang="ts">

    import {Input} from '../../lib/index'
  export default  {
    name: "InputDemo",
    components: {Input},
    component:{Input}
  }
</script>

<style lang="scss" scoped src="./style/index.scss"></style>
