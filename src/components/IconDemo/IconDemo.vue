<template>
    <IconUi name="xxxx"></IconUi>
    <FishIcon>xxxx</FishIcon>
    <svg class="icon" aria-hidden="true">
        <use xlink:href="#auto"></use>
    </svg>
</template>

<script lang="ts">
    import {FishIcon} from '../../lib/index'

    console.log(FishIcon);
    export default {
    name: "IconDemo",
    component:{FishIcon},
    setup(props){
      console.log(props)
    }
  }
</script>

<style lang="scss" scoped>


</style>