<template>
    <div :class="classes">
        <label class="fish-ui-checkbox-input">
            <input type="checkbox" :disabled="disabled" >
        </label>
        <span class="fish-ui-checkbox-label">{{label}}</span>
    </div>
</template>

<script lang="ts" setup="props">
    import {computed} from "vue";

    declare const props: {
        theme?: 'button' | 'text' | 'link';
        size?: 'normal' | 'big' | 'small';
        level?: 'normal' | 'main' | 'danger';
        disabled:boolean;
        loading: boolean;
        label:string
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
            }
        },
        setup(props){
            console.log(props);
        }
    }
    const {theme, size, level,disabled} = props;
    console.log(disabled);
    export const classes = computed(()=>{
        return {
            [`fish-ui-checkbox`]:'fish-ui-checkbox',
            [`fish-ui-checkbox-disable`]: disabled ? 'ban':''
        }
    })
    console.log(classes)
</script>

<style lang="scss" scoped>

    $disable:#c0c4cc;

.fish-ui-checkbox{
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    overflow: hidden;
    max-height: 24px;
    cursor: pointer;
    white-space: nowrap;
    user-select: none;
    display: inline-block;
    &-input{
        white-space: nowrap;
        cursor: pointer;
        outline: none;
        display: inline-block;
        line-height: 1;
        position: relative;
        vertical-align: middle;
    }
    &-label{
        display: inline-block;
        padding-left: 10px;
        line-height: 19px;
        font-size: 14px;
    }
    &-disable{
        color: #c0c4cc;
        cursor: not-allowed;
    }
}
</style>