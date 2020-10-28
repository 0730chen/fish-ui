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
        console.log(props);
    }
};
const { theme, size, level, disabled } = props;
console.log(disabled);
export const classes = computed(() => {
    return {
        [`fish-ui-checkbox`]: 'fish-ui-checkbox',
        [`fish-ui-checkbox-disable`]: disabled ? 'ban' : ''
    };
});
console.log(classes);
