<demo>按钮形式</demo>
<template>
    <div class="checkbox-wrap">
        <CheckBox label="边框选择" border></CheckBox>
        <CheckBox label="另一种颜色" border></CheckBox>
        <CheckBox label="大边框" border></CheckBox>
        <CheckBox label="色彩" border></CheckBox>
    </div>
</template>

<script lang="ts">
  import {CheckBox} from '../../lib';

  export default {
    name: "CheckBoxDemo2",
    components: {CheckBox}
  }
</script>

<style lang="scss" scoped>
    .checkbox-wrap{
        >.fish-ui-checkbox{
            margin: 0 16px;
        }
    }
</style>