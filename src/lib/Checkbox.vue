<template>
    <div :class="classes">
        Checkbox
    </div>
</template>

<script lang="ts" setup="props">
    import {computed} from "vue";

    declare const props: {
        theme?: 'button' | 'text' | 'link';
        size?: 'normal' | 'big' | 'small';
        level?: 'normal' | 'main' | 'danger';
        disabled: boolean;
        loading: boolean;
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

            const classes = computed(()=>{
                return {
                    [`fish-ui-${props.theme}`]:props.theme
                }
            })

            return{
                classes
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>