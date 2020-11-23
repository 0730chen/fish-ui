//传入的值进行一个监听
//context.emit("update:xxxx")
export default {
    name: "Switch",
    props: {
        value: Boolean
    }
};
export const toggle = () => {
    console.log('更新');
    context.emit("update:value", !props.value);
};
