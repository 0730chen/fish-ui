<template>
    <h1>Switch组件示例</h1>
    <Demo :component="
SwitchDemo1"></Demo>
    <Demo :component="SwitchDemo2"></Demo>
</template>

<script lang="ts">

    import Switch from "../../lib/Switch.vue";
    import Demo from "../Demo.vue";
    import {ref} from 'vue'
    import SwitchDemo1 from "./SwitchDemo1.vue";
    import SwitchDemo2 from "./SwitchDemo2.vue";

    export default {
        name: "SwitchDemo",
        components: {Demo, Switch, SwitchDemo1, SwitchDemo2},
        setup() {
            const bool = ref(false)

            return {
                bool,
                SwitchDemo1,
                SwitchDemo2
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>