<template>
    <div class="fish-ui-checkbox-demo">
        <CheckBox label="复选" theme="black" color="black"></CheckBox>
        <CheckBox label="禁用" disabled></CheckBox>
        <CheckBox label="边框选择"  border></CheckBox>

    </div>
</template>

<script lang="ts">
    import {CheckBox} from "../../lib/index";
    export default {
        name: "CheckBoxDemo",
        components:{CheckBox}
    }
</script>

<style lang="scss" scoped>
    .fish-ui-checkbox-demo{
        display: flex;
        flex: 1;
        margin-top: 80px;
        align-items: center;
        .fish-ui-checkbox + .fish-ui-checkbox{
            margin-left: 16px;
        }
    }

</style>