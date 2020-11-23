import { Buttons } from '../lib/index';
import 'prismjs';
import 'prismjs/themes/prism.css';
import { computed, ref } from 'vue';
const Prism = window.Prism;
export default {
    components: {
        Buttons
    },
    props: {
        component: Object
    },
    setup(props) {
        const html = computed(() => {
            return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
        });
        const showCode = () => codeVisible.value = true;
        const hideCode = () => codeVisible.value = false;
        const codeVisible = ref(false);
        return {
            Prism,
            html,
            codeVisible,
            showCode,
            hideCode
        };
    }
};
