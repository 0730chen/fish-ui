import TopNav from "../TopNav/TopNav.vue";
import LeftNav from "../LeftNav/LeftNav.vue";
import { inject, ref } from 'vue';
export default {
    name: 'Layout',
    components: { LeftNav, TopNav },
    setup() {
        const menuVisible = inject("menuVisible"); // get
        const mobileMenu = ref(null);
        console.dir(mobileMenu);
        return { menuVisible, mobileMenu };
    }
};
