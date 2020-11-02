import { computed } from 'vue';
export default {
    name: 'Icon',
    setup(props) {
        console.log(props);
        let classes = computed(() => {
            return {
                'fish-ui-icon': true
            };
        });
        return { classes };
    }
};
