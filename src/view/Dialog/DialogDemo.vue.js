Dialog示例 < /h1>
    < Demo;
component = "DialogDemo1" > /Demo>
    < /template>
    < script;
lang = "ts" >
;
import Demo from "../Demo.vue";
import DialogDemo1 from './DialogDemo1.vue';
export default {
    name: "DialogDemo",
    components: { Demo },
    setup() {
        return {
            DialogDemo1
        };
    }
}
    < /script>
    < style;
lang = "scss";
scoped >
    /style>;
