<template>
    <div :class="classes">
        <label class="fish-ui-checkbox-input">
            <input type="checkbox" :disabled="disabled" :style="style" @change="inputChange" >
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
        label:string,
        color:string,
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
            color:{
                type:String,
                default:'red'
            }
        },
        setup(props){
            console.log(props);
        }
    }
    const {theme, size, level,disabled,color} = props;
    console.log(disabled);
    export const classes = computed(()=>{
        return {
            active:inputChange?'is-check':'',
            [`fish-ui-checkbox`]:'1111',
            [`is-checked`]:inputChange?'is-checked':'',
            [`fish-ui-checkbox-disable`]: disabled ? 'ban':''
        }
    })
    export const style = computed(()=>{
        return{
            color:color
        }
    })
    export const inputChange = (e)=>{
        console.log(e.target.checked);
        return e.target.checked
    }
    console.log(classes,style)
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