import Demo from "../Buttons/Demo.vue";
import IconDemo1 from './IconDemo1.vue';
export default {
    name: "IconDemo",
    components: { Demo },
    setup(props) {
        console.log(props);
        return {
            IconDemo1
        };
    }
};
