import { computed } from 'vue';
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
        let iconName = computed((name) => {
            return `#${name}`;
        });
        function copyName(name) {
            console.log('复制名字');
            //调用剪切板方法
        }
        return {
            name,
            copyName,
            iconName
        };
        // let s = ref(1)
        // console.log(s);
        //
        // return {
        //     s
        // }
    }
};
