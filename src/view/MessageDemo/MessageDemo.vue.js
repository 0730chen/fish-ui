import { Buttons } from "../../lib";
import { openMessage } from "../../lib/openMessage";
import { Message } from "../../lib";
export default {
    name: "MessageDemo",
    components: { Buttons, Message },
    setup() {
        let clickMessage = () => {
            console.log('hahah ');
            openMessage('xxxxx');
        };
        return {
            clickMessage
        };
    }
};
