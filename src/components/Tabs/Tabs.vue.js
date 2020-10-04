import Tabs from "../HelloWorld.vue";
import { ref, onMounted } from 'vue';
export default {
    components: { Tabs },
    props: {
        panes: Array
    },
    setup(props) {
        const x = ref(props.panes[0].content);
        console.log(x.value);
        console.log(props.panes);
        const setTab = (p) => {
            x.value = p.content;
        };
        const buttons = ref([]);
        //组件挂载
        onMounted(() => {
            console.log(buttons);
            // const button[index]:HTMLElement = buttons.value[0]
            // console.log(button0);
            // // button0
            // const width = button0.getBoundingClientRect()
            // console.log(width)
        });
        return { x, setTab, buttons };
    }
};
