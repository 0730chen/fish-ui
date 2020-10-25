export default {
    name: "Tag",
    props: {
        size: {
            type: String,
            default: 'normal'
        },
        color: {
            type: String,
            default: '#1ABE96',
        },
        type: {
            type: String,
            default: ''
        },
        closeable: {
            type: Boolean,
            default: false
        },
        effect: {
            type: String,
            default: 'light'
        }
    },
    setup(props, context) {
        console.log(props, context);
        console.log(Object.entries(props));
        // let s = ref(1)
        // console.log(s);
        //
        // return {
        //     s
        // }
    }
};
