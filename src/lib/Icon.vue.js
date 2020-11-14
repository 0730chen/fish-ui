export default {
    name: 'FishIcon',
    props: {
        name: {
            type: String,
            default: ''
        }
    },
    setup(props, context) {
        console.log(props, context, 'xxxx');
        let { name } = props;
        return {
            name
        };
        // let s = ref(1)
        // console.log(s);
        //
        // return {
        //     s
        // }
    }
};
