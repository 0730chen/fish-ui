import { Buttons } from "../../lib";
import { openMessage } from "../../lib/openMessage";
import { Message } from "../../lib";
import { ref } from 'vue';
export default {
    name: "MessageDemo",
    components: { Buttons, Message },
    setup() {
        let x = ref(false);
        let toggle = () => {
            console.log('hahah ');
            x.value = !x.value;
            openMessage('我是传入的参数');
            console.log(x.value);
        };
        return {
            x,
            toggle
        };
    }
};
