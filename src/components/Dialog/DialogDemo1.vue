
<demo>
    常规使用
</demo>
<template>
    <div>
        <Button @click="toggle">打开对话框</Button>
        <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
            <template v-slot:content>
                <strong>hi</strong>
                <div>hi2</div>
            </template>
            <template v-slot:title>
                <strong>加粗的标题</strong>
            </template>
        </Dialog>
    </div>
</template>

<script lang="ts">

    import Demo from "../Demo.vue";
    import {Buttons,Dialog} from "../../lib";

    export default  {
        name: "DialogDemo1",
        components:{Demo}
    }
</script>

<style lang="scss" scoped>

</style>