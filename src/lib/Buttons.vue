<template>
    <div>
        <button class="fish-button" :class="classes" :disabled="disabled">
            <slot/>
        </button>
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
        name:'Buttons',
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
    const {theme, size, level} = props;
    //通过计算属性改变该组件的class
    export const classes = computed(() => {
        return {
            [`fish-theme-${theme}`]: theme,
            [`fish-size-${size}`]: size,
            [`fish-level-${level}`]: level,
        };
    });
</script>

<style lang="scss">
    $h: 32px;
    $border-color: #d9d9d9;
    $color: #333;
    $blue: #40a9ff;
    $radius: 4px;
    $red: red;
    $grey: grey;
    .fish-button {
        box-sizing: border-box;
        height: $h;
        padding: 0 12px;
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        background: white;
        color: $color;
        border: 1px solid $border-color;
        border-radius: $radius;
        box-shadow: 0 1px 0 fade-out(black, 0.95);
        transition: background 250ms;

        & + & {
            margin-left: 8px;
        }

        &:hover,
        &:focus {
            color: $blue;
            border-color: $blue;
        }

        &:focus {
            outline: none;
        }

        &::-moz-focus-inner {
            border: 0;
        }

        &.fish-theme-link {
            border-color: transparent;
            box-shadow: none;
            color: $blue;

            &:hover,
            &:focus {
                color: lighten($blue, 10%);
            }
        }

        &.fish-theme-text {
            border-color: transparent;
            box-shadow: none;
            color: inherit;

            &:hover,
            &:focus {
                background: darken(white, 5%);
            }
        }

        &.fish-size-big {
            font-size: 24px;
            height: 48px;
            padding: 0 16px;
        }

        &.fish-size-small {
            font-size: 12px;
            height: 20px;
            padding: 0 4px;
        }

        &.fish-theme-button {
            &.fish-level-main {
                background: $blue;
                color: white;
                border-color: $blue;

                &:hover,
                &:focus {
                    background: darken($blue, 10%);
                    border-color: darken($blue, 10%);
                }
            }

            &.fish-level-danger {
                background: $red;
                border-color: $red;
                color: white;

                &:hover,
                &:focus {
                    background: darken($red, 10%);
                    border-color: darken($red, 10%);
                }
            }
        }

        &.fish-theme-link {
            &.fish-level-danger {
                color: $red;

                &:hover,
                &:focus {
                    color: darken($red, 10%);
                }
            }
        }

        &.fish-theme-text {
            &.fish-level-main {
                color: $blue;

                &:hover,
                &:focus {
                    color: darken($blue, 10%);
                }
            }

            &.fish-level-danger {
                color: $red;

                &:hover,
                &:focus {
                    color: darken($red, 10%);
                }
            }
        }

        &.fish-theme-button {
            &[disabled] {
                cursor: not-allowed;
                color: $grey;

                &:hover {
                    border-color: $grey;
                }
            }
        }

        &.fish-theme-link, &.fish-theme-text {
            &[disabled] {
                cursor: not-allowed;
                color: $grey;
            }
        }

        > .fish-loadingIndicator {
            width: 14px;
            height: 14px;
            display: inline-block;
            margin-right: 4px;
            border-radius: 8px;
            border-color: $blue $blue $blue transparent;
            border-style: solid;
            border-width: 2px;
            animation: fish-spin 1s infinite linear;
        }
    }

    @keyframes fish-spin {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }
</style>