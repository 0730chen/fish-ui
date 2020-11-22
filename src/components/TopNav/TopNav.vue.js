import { inject } from "vue";
import { FishIcon } from "../../lib/index";
export default {
    name: 'TopNav',
    props: {
        toggleMenuButtonVisible: {
            type: Boolean,
            default: false
        }
    },
    components: {
        FishIcon
    },
    setup() {
        const menuVisible = inject("menuVisible"); // get
        console.log(menuVisible.value);
        const toggleMenu = () => {
            console.log(menuVisible.value);
            if (menuVisible) {
                menuVisible.value = !menuVisible.value;
            }
        };
        return {
            toggleMenu
        };
    },
};
