<template>
    <div :class="classes">
        <label class="fish-ui-checkbox-input">
            <input type="checkbox" :disabled="disabled" :style="style" @change="inputChange" >
        </label>
        <span class="fish-ui-checkbox-label">{{label}}</span>
    </div>
</template>

<script lang="ts">
    import {computed,ref} from "vue";
    import {latestVersionsMap} from "vite/dist/node/server/serverPluginHmr";

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
        setup(props,content){
            console.log(props,content);
            const {theme, size, level,disabled,color,label} = props;
            console.log(disabled,color,label);
            const classes = computed(()=>{

                console.log(inputChange);
                return {
                    'fish-ui-checkbox':true,
                    'fish-ui-checkbox-disable':false,
                    'is-checked':false
                }
            })

           function  inputChange(e){
                     let disable = e.target.checked
                     console.log(disable);
                     classes.value['is-checked'] = disable
                     console.log(classes);
                 }
            let status = ref(false)
            console.log(props);
            return {status,classes}
        }
    }
    // console.log(status.valueOf());
    // const {theme, size, level,disabled,color} = props;
    // console.log(disabled);
    // export const classes = computed(()=>{
    //
    //     console.log(inputChange);
    //     return {
    //         'fish-ui-checkbox':true,
    //         'fish-ui-checkbox-disable':false,
    //         'is-checked':false
    //     }
    // })
    // export const style = computed(()=>{
    //     return{
    //         color:color
    //     }
    // })
    // export const inputChange = (e)=>{
    //     let disable = e.target.checked
    //     console.log(disable);
    //     classes.value['is-checked'] = disable
    //     console.log(classes);
    // }
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