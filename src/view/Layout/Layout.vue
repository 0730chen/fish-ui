<template>
    <div class="container-warp">
        <TopNav></TopNav>
        <div class="layout-warp">
            <LeftNav></LeftNav>
            <RouterView></RouterView>
        </div>
    </div>
</template>

<style lang="scss" src="./index.scss" ></style>
<script lang="ts">
    import TopNav from "../../components/TopNav/TopNav.vue";
    import LeftNav from "../../components/LeftNav/LeftNav.vue";

    export default {
        name: 'Layout',
        components: {LeftNav, TopNav},
    }
</script>