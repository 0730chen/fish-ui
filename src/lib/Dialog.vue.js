import Buttons from "./Buttons.vue";
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true
        },
        ok: {
            type: Function
        },
        cancel: {
            type: Function
        }
    },
    components: {
        Buttons,
    },
};
export const close = () => {
    context.emit('update:visible', false);
};
export const onClickOverlay = () => {
    if (props.closeOnClickOverlay) {
        close();
    }
};
export const onClickOk = () => {
    console.log(this);
    if (props.ok?.() !== false) {
        close();
    }
};
export const onClickCancel = () => {
    props.cancel?.();
    close();
};
