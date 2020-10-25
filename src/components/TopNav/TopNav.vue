<style src="./index.scss" scoped lang="scss"></style>
<template>
    <div class="topnav">
        <div class="link-wrap">
        <router-link to="/">首页</router-link>
        <router-link to="/tabs">主题</router-link>
        <router-link to="/demo">组件</router-link>
        <router-link to="/switch">相关资源</router-link>
        </div>
        <router-link to="/" class="logo">
<!--            <svg class="icon">-->
<!--                <use xlink:href="#icon-king"></use>-->
<!--            </svg>-->
            logo
        </router-link>
    </div>
</template>

<script lang="ts">
    import {inject, Ref} from "vue"

    export default {
        name: 'TopNav',
        props: {
            toggleMenuButtonVisible: {
                type: Boolean,
                default: false
            }
        },
        setup() {
            const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
            const toggleMenu = () => {
                if(menuVisible){
                    menuVisible.value = !menuVisible.value;
                }
            };
            return {
                toggleMenu
            };
        },
    }
</script>

<style lang="scss" scoped>

</style>