import { Tab, Tabs } from "../../lib/index";
import Demo from '../Demo.vue';
import { ref } from 'vue';
export default {
    name: 'TabsDemo',
    components: {
        Demo,
        Tabs,
        Tab,
    },
    setup() {
        const x = ref('导航2');
        return {
            x,
            Demo
        };
    }
};
