<template>
    <!--    <Tag>哈哈</Tag>-->
    <div class="fish-ui-tag tag-demo">
        <Tag>标签一</Tag>
        <Tag color="red">标签二</Tag>
        <Tag type="waring">标签三</Tag>
        <Tag size="medium">中等标签</Tag>
        <Tag size="small">小型标签</Tag>

    </div>
</template>

<script lang="ts">
    import {ref} from 'vue'
    import {Tag} from "../../lib";
    export default {
        name: "TagDemo",
        components: {
            Tag
        }
    }
</script>

<style lang="scss">
    .tag-demo {
        padding: 80px 24px 24px 24px;

        .fish-ui-tag + .fish-ui-tag{
            margin-left: 16px;
        }
    }
</style>