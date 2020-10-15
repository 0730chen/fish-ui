<template>
    <TopNav></TopNav>
    <RouterView></RouterView>
    <LeftNav></LeftNav>
</template>

<script lang="ts">
    import TopNav from "../../components/TopNav/TopNav.vue";
    import LeftNav from "../../components/LeftNav/LeftNav.vue";

    export default {
        name:'Layout',
        components: {LeftNav, TopNav},
    }
</script>