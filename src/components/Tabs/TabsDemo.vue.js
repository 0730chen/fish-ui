import { Tab, Tabs } from "../../lib/index";
export default {
    name: 'TabsDemo',
    components: {
        Tabs,
        Tab,
    },
    setup() {
        const x = ref('导航2');
        return {
            x
        };
    }
};
