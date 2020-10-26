<template>
    <div :class="classes">
        <label>
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
        disabled:{
            type:Boolean,
            default:false
        };
        loading: boolean;
        label:String
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
    export const classes = computed(()=>{
        return {
            [`fish-ui-${theme}`]:theme,
            [`fish-ui-${disabled}`]:disabled,
        }
    })
    console.log(classes)
</script>

<style lang="scss" scoped>
.fish-ui-checkbox{
    &-label{
        padding-left: 8px;
    }
}
</style>