console.log(11111);
export default {
    name: 'FishIcon',
    props: {
        name: {
            type: String,
            default: ''
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
