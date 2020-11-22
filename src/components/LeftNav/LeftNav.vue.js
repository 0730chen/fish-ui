import { ref, inject, computed, onMounted, nextTick } from 'vue';
export default {
    name: "LeftNav",
    setup() {
        const menuVisible = inject("menuVisible");
        const tree = ref(null);
        onMounted(() => {
            console.log(tree.value.style);
            if (menuVisible.value) {
                tree.value.style.marginLeft = '0px';
            }
            else {
                tree.value.style.marginLeft = '-200px';
            }
        });
        let mobileStyle = computed(() => {
            console.log('菜单组件', menuVisible.value);
            if (menuVisible.value) {
                return {
                    marginLeft: '0px'
                };
            }
            else {
                return {
                    marginLeft: '-200px'
                };
            }
        });
        const width = document.documentElement.clientWidth;
        document.addEventListener('click', () => {
            nextTick(() => {
                if (menuVisible.value && tree.value) {
                    if (width <= 500) {
                        tree.value.style.marginLeft = '-200px';
                    }
                }
            });
        });
        return { mobileStyle, menuVisible, tree };
    }
};
