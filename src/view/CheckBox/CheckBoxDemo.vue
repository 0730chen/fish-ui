<template>
    <div class="fish-ui-checkbox-doc">
        <div class="fish-ui-checkbox-demo">
            <div class="fish-ui-checkbox-demo-example">
                <CheckBox label="复选" theme="black" color="black"></CheckBox>
                <CheckBox label="禁用" disabled></CheckBox>
            </div>
            <div class="fish-ui-checkbox-demo-code">
                代码示例
            </div>
        </div>
        <div class="fish-ui-checkbox-demo">
            <div class="fish-ui-checkbox-demo-example">
                <CheckBox label="边框选择" border></CheckBox>
                <CheckBox label="另一种颜色" border></CheckBox>
                <CheckBox label="大边框" border></CheckBox>
                <CheckBox label="色彩" border></CheckBox>
            </div>
            <div class="fish-ui-checkbox-demo-code">
                代码实例
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import {CheckBox} from "../../lib";

  export default {
    name: "CheckBoxDemo",
    components: {CheckBox}
  }
</script>

<style lang="scss" scoped>
    .fish-ui-checkbox-doc {
        display: flex;
        flex: 1;
        flex-direction: column;
        .fish-ui-checkbox-demo {
            text-align: left;
            flex-direction: column;
            border: 1px solid #f6f6f6;

            .fish-ui-checkbox + .fish-ui-checkbox {
                margin-left: 16px;
            }

            &-example {
                padding: 16px;
                border: 1px solid #f6f6f6;
            }
            &-code{
                padding: 16px;
            }
        }
    }

</style>