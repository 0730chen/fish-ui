<template>
    111
    <Icon name="wexin"></Icon>
    <svg class="icon" aria-hidden="true">
        <use xlink:href="fish-ui-auto"></use>
    </svg>
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