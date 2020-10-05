import Button from '../lib/Buttons.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';
import { computed, ref } from 'vue';
const Prism = window.Prism;
console.log(Prism);
export default {
    name: "Demo",
    components: {
        Button
    },
    props: {
        component: Object
    },
    setup(props) {
        console.log(props);
        const html = computed(() => {
            return Prism.highlight(props.component._sourceCode, Prism.languages.html, 'html');
        });
        const codeVisible = ref(false);
        const showCode = () => {
            codeVisible.value = true;
        };
        const hideCode = () => {
            codeVisible.value = false;
        };
        return {
            Prism,
            html,
            codeVisible,
            showCode,
            hideCode
        };
    }
};
