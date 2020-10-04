export default {
    name: "Switch",
    props: {
        value: Boolean
    }
};
export const toggle = () => {
    context.emit("update:value", !props.value);
};
