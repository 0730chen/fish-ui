<template>
    <div class="topnav">

        <router-link to="/">首页</router-link>
        <router-link to="/tabs">标签页</router-link>
        <router-link to="/" class="logo">
            <svg class="icon">
                <use xlink:href="#icon-king"></use>
            </svg>
        </router-link>
        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>
        </ul>
        <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
            <use xlink:href="#icon-menu"></use>
        </svg>
    </div>
</template>

<script lang="ts">

    import {
        inject,
        Ref
    } from "vue";

    export default {
        name: 'TopNav',
        props: {},
        setup() {

        }
    }
</script>

<style lang="scss" scoped>

</style>