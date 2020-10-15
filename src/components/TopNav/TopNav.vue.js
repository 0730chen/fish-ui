import { inject } from "vue";
export default {
    name: 'TopNav',
    props: {
        toggleMenuButtonVisible: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const menuVisible = inject("menuVisible"); // get
        const toggleMenu = () => {
            if (menuVisible) {
                menuVisible.value = !menuVisible.value;
            }
        };
        return {
            toggleMenu
        };
    },
};
