<template>
    <div>
        <button type=""></button>
    </div>
</template>

<script lang="ts">

    declare const props:{
        theme?: 'button' | 'text' | 'link';
        size?: 'normal' | 'big' | 'small';
        level?: 'normal' | 'main' | 'danger';
        disabled: boolean;
        loading: boolean;
    }
    export default {
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
    };
    const { theme, size, level } = props;
    export const classes = computed(() => {
        return {
            [`gulu-theme-${theme}`]: theme,
            [`gulu-size-${size}`]: size,
            [`gulu-level-${level}`]: level,
        };
    });
</script>

<style lang="scss" scoped>

</style>