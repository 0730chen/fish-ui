<template>
    <TopNav></TopNav>
    <RouterView></RouterView>
</template>

<script lang="ts">
    import TopNav from "../../components/TopNav/TopNav.vue";

    export default {
        name:'Layout',
        components: {TopNav},
    }
</script>