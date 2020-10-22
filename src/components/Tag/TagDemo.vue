<template>
<!--    <Tag>哈哈</Tag>-->

    <Tag>标签一</Tag>
    <Tag color="red">标签二</Tag>
</template>

<script lang="ts">
    import {ref} from 'vue'
    import {Tag} from "../../lib/index";

    console.log(Tag);
    export default{
        name: "TagDemo",
        components:{
            Tag
        }
    }
</script>

<style lang="scss" scoped>

</style>