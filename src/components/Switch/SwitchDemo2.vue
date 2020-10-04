<template>
 <Switch v-model:value="bool"></Switch>
</template>

<script lang="ts">
    import Switch from "../../lib/Switch.vue";
    import {ref} from 'vue'
    export default {
        name: "SwitchDemo2",
        components: {Switch},
        setup(){
            const bool = ref(false)
            return {
                bool
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>