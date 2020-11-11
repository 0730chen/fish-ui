<template>
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
    components:{FishIcon},
    setup(props){
      console.log(props)
    }
  }
</script>

<style lang="scss" scoped>


</style>