<style src="./index.scss" lang="scss" scoped></style>
<template>
    <div class="topnav">
        <div class="link-wrap">
        <router-link to="/">首页</router-link>
        <a href="https://vue3js.cn/docs/">Vue3文档</a>
        </div>
            <FishIcon name="yu"></FishIcon>
        <FishIcon name="menu1" class="mobile-menu"  @click="toggleMenu"></FishIcon>
    </div>
</template>

<style lang="scss">

    @media  screen and(max-width: 768px) {
        .mobile-menu {
            cursor: pointer;
            >.icon {
                width: 32px !important;
                height: 32px !important;
            }
        }
    }

</style>
<script lang="ts">
    import {inject, Ref} from "vue"
    import {FishIcon} from "../../lib/index";

    export default {
        name: 'TopNav',
        props: {
            toggleMenuButtonVisible: {
                type: Boolean,
                default: false
            }
        },
      components:{
          FishIcon
      },
        setup() {
            const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
            const toggleMenu = () => {
              console.log(menuVisible.value);
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
