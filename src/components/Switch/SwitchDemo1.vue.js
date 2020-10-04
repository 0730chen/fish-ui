import Switch from "../../lib/Switch.vue";
import { ref } from 'vue';
export default {
    name: "SwitchDemo1",
    components: { Switch },
    setup() {
        const bool = ref(false);
        return {
            bool
        };
    }
};
