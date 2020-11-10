import { computed, ref } from "vue";
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
        color: {
            type: String,
            default: 'red'
        },
        label: String,
        border: {
            type: Boolean,
            default: false
        }
    },
    setup(props, content) {
        console.log(props, content);
        const { theme, size, level, disabled, color, label, border } = props;
        console.log(disabled, color, label);
        let isChecked = ref(false);
        const classes = computed(() => {
            return {
                'fish-ui-checkbox': true,
                'fish-ui-checkbox-disable': false,
                'is-checked': isChecked.value,
                'is-border': border
            };
        });
        function inputChange(e) {
            console.log(isChecked.value);
            classes.value["is-checked"] = true;
            isChecked.value = !isChecked.value;
            console.log(classes);
        }
        let status = ref(false);
        console.log(classes.value);
        return { status, classes, inputChange, isChecked };
    }
};
