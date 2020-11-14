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
        function copyName(name) {
            console.log('复制名字');
            alert(name);
            //调用剪切板方法
        }
        return {
            name,
            copyName
        };
        // let s = ref(1)
        // console.log(s);
        //
        // return {
        //     s
        // }
    }
};
