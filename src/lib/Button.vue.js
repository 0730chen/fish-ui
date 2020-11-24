import { computed } from "vue";
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
        [`fish-theme-${theme}`]: theme,
        [`fish-size-${size}`]: size,
        [`fish-level-${level}`]: level,
    };
});
