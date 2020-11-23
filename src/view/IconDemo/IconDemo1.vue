<demo>常规用法</demo>
<template>
    <div class="icon-wrap">
        <FishIcon name="copy"></FishIcon>
        <FishIcon name="code"></FishIcon>
        <FishIcon name="editor"></FishIcon>
        <FishIcon name="computer_huaban1"></FishIcon>
        <FishIcon name="eyeclose_huaban1"></FishIcon>
    </div>
</template>

<script lang="ts">
  import {FishIcon} from '../../lib'
  export default {
    name: "IconDemo1",
    components:{FishIcon}
  }
</script>

<style lang="scss" scoped>
.icon-wrap{
    display: flex;
}
</style>