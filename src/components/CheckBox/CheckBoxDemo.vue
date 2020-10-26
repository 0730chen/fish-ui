<template>
    <div >
        <CheckBox label="复选" theme="black"></CheckBox>
        <CheckBox label="禁用" disabled></CheckBox>
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

</style>