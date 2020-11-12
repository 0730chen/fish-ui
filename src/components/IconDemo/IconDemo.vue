<template>
    <FishIcon name="copy"></FishIcon>
</template>

<script lang="ts">
    import {FishIcon} from '../../lib/index'

    console.log(FishIcon);
    export default {
    name: "IconDemo",
    components:{FishIcon},
    setup(props){
      console.log(props)
    }
  }
</script>

<style lang="scss" scoped>


</style>