import { computed } from "vue";
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
    setup(props) {
        const classes = computed(() => {
            return {
                [`fish-ui-${props.theme}`]: props.theme,
                [`fish-ui-${props.size}`]: props.size,
                [`fish-ui-${props.level}`]: props.level,
                [`fish-ui-${props.disabled}`]: props.disabled,
            };
        });
        return {
            classes
        };
    }
};
