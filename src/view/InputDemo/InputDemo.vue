<template>
    开发中
    <label>
        <Input v-model="x"></Input>
    </label>
    <!--    <label>-->
<!--        <Input v-model="input" placeholder="请输入内容"></Input>-->
<!--    </label>-->
</template>

<script lang="ts">

    import {Input} from '../../lib'
    import {ref} from 'vue'
  export default  {
    name: "InputDemo",
    components: {Input},
    component:{Input},
    setup(){
      const x = ref(0)

      return x
    }
  }
</script>

<style lang="scss" scoped src="./style/index.scss"></style>
