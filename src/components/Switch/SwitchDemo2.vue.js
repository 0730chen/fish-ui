import Switch from "../../lib/Switch.vue";
import { ref } from 'vue';
export default {
    name: "SwitchDemo2",
    components: { Switch },
    setup() {
        const bool = ref(false);
        return {
            bool
        };
    }
};
