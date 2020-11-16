<template>
    <label>
        <Input v-model="input" placeholder="请输入内容"></Input>
    </label>
</template>

<script lang="ts">

    import {Input} from '../../lib'
  export default  {
    name: "InputDemo",
    components: {Input},
    component:{Input}
  }
</script>

<style lang="scss" scoped src="./style/index.scss"></style>
