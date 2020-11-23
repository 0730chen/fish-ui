import { Tag } from "../../lib";
import Demo from '../Demo.vue';
import TagDemo1 from './TagDemo1.vue';
export default {
    name: "TagDemo",
    components: {
        Tag,
        Demo
    },
    setup() {
        return {
            TagDemo1
        };
    }
};
