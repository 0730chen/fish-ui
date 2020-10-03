<template>
    <div class="Fish-tab">
        <slot/>
    </div>
</template>

<script lang="ts">

    import { defineComponent } from 'vue'

    console.log(defineComponent);
    export default defineComponent( {
        name: 'FishTab'
    })
</script>