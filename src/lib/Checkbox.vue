<template>
    <div :class="classes" @click.stop="inputChange">
        <label class="fish-ui-checkbox-input">
            <input type="checkbox" :disabled="disabled" :style="style" :checked=" isChecked">
        </label>
        <span class="fish-ui-checkbox-label">{{label}}</span>
    </div>
</template>

<script lang="ts">
    import {computed, ref} from "vue";
    import {latestVersionsMap} from "vite/dist/node/server/serverPluginHmr";

    declare const props: {
        theme?: 'button' | 'text' | 'link';
        size?: 'normal' | 'big' | 'small';
        level?: 'normal' | 'main' | 'danger';
        disabled: boolean;
        loading: boolean;
        label: string,
        color: string,
        border:false,
    }
    export default {
        name: "Checkbox",
        props: {
            theme: {
                type: String,
                default: "button",
            },
            size: {
                type: String,
                default: "normal",
            },
            level: {
                type: String,
                default: "normal",
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            loading: {
                type: Boolean,
                default: false
            },
            color: {
                type: String,
                default: 'red'
            },
            label: String,
            border:{
                type:Boolean,
                default:false
            }
        },
        setup(props, content) {
            console.log(props, content);
            const {theme, size, level, disabled, color, label,border} = props;
            console.log(disabled, color, label);
            let isChecked = ref(false)

            const classes = computed(() => {
                return {
                    'fish-ui-checkbox': true,
                    'fish-ui-checkbox-disable': false,
                    'is-checked':isChecked.value,
                    'is-border':border
                }
            })

            function inputChange(e) {
              console.log(isChecked.value);

                classes.value["is-checked"] = true
              isChecked.value = !isChecked.value
              console.log(classes)
            }

            let status = ref(false)
            console.log(classes.value);
            return {status, classes,inputChange,isChecked}
        }
    }
</script>

<style lang="scss" scoped>

    $disable: #c0c4cc;

    .fish-ui-checkbox {
        color: #606266;
        font-weight: 500;
        font-size: 14px;
        overflow: hidden;
        max-height: 24px;
        cursor: pointer;
        white-space: nowrap;
        user-select: none;
        display: inline-block;
        &-input {
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            display: inline-block;
            line-height: 1;
            position: relative;
            vertical-align: middle;
        }

        &-label {
            display: inline-block;
            padding-left: 10px;
            line-height: 19px;
            font-size: 14px;
        }

        &-disable {
            color: #c0c4cc;
            cursor: not-allowed;
        }
        &.is-border{
            padding: 9px 20px 9px 10px;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            line-height: normal;
            max-height: 40px;
        }
        &.is-border.is-checked{
            border-color: #409eff;
        }
        }

    .is-checked{
        color: #409eff;
    }
</style>