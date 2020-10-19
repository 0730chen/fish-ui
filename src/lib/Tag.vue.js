import { ref } from 'vue';
export default {
    name: "Tag",
    props: {
        size: {
            type: String,
            default: 'normal'
        },
        color: {
            type: String,
            default: '1ABE96',
        },
        type: {
            type: 'String',
            default: 'success'
        }
    },
    setup(props) {
        console.log(props);
        let s = ref(1);
        console.log(s);
        return {
            s
        };
    }
};
