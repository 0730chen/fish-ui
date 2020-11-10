<template>
    <div class="left-nav">

        <router-link to="/">首页</router-link>
        <router-link to="/tabs">标签页</router-link>
        <router-link to="/demo">Demo页</router-link>
        <router-link to="/switch">Switch组件</router-link>
        <router-link to="/dialog">Dialog组件</router-link>
        <router-link to="/tag">Tags组件</router-link>
        <router-link to="/checkbox">CheckBox组件</router-link>
        <router-link to="/select">Select组件</router-link>
        <router-link to="/icon">Icon组件</router-link>
        <router-link to="/input">Input组件</router-link>

        <router-link to="/" class="logo">
            <svg class="icon">
                <use xlink:href="#icon-king"></use>
            </svg>
        </router-link>
    </div>
</template>

<script lang="ts">
    export default {
        name: "LeftNav"
    }
</script>

<style lang="scss"  src="./index.scss" scoped></style>