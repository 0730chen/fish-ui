import Demo from "../Demo.vue";
import SwitchDemo1 from "./SwitchDemo1.vue";
import SwitchDemo2 from "./SwitchDemo2.vue";
export default {
    name: "SwitchDemo",
    components: { Demo },
    setup() {
        return {
            SwitchDemo1,
            SwitchDemo2
        };
    }
};
