<template>
    <Icon name="wexin"></Icon>
</template>

<script lang="ts">
    import {Icon} from '../../lib/index'
  export default {
    name: "IconDemo",
    component:{Icon},
    setup(props){
      console.log(props)
    }
  }
</script>

<style lang="scss" scoped>

</style>