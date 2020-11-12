import { ref } from 'vue';
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
        const name = ref('小四');
        const age = ref(18);
        console.log(name, age);
        return {};
        // let s = ref(1)
        // console.log(s);
        //
        // return {
        //     s
        // }
    }
};
