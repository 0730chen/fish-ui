import Tab from './Tab.vue';
import { computed, ref, watchEffect, onMounted } from 'vue';
console.log(context);
export default {
    props: {
        selected: {
            type: String
        }
    }
};
export const selectedItem = ref(null);
export const indicator = ref(null);
export const container = ref(null);
//watchEffect 第二个参数
//如果想让watchEffect()调用发生在组件update前，或re-run同步，需要传递一个带有flush属性(默认值为post)的option对象。pre 在更新之前触发
onMounted(() => {
    watchEffect(() => {
        const { width } = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const { left: left1 } = container.value.getBoundingClientRect();
        const { left: left2 } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + 'px';
    }, { flush: 'post' });
});
console.log(context);
export const defaults = context.slots.default();
defaults.forEach((tag) => {
    if (tag.type.name !== Tab.name) {
        throw new Error('Tabs的子标签必须是tab');
    }
});
export const current = computed(() => {
    return defaults.find(tag => tag.props.title === props.selected);
});
export const titles = defaults.map((tag) => {
    return tag.props.title;
});
export const select = ((title) => {
    context.emit('update:selected', title);
});
