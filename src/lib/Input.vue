<template>
    <div class="fish-ui-input">
        <label>
            <input type="text" v-model="value">
        </label>
    </div>
</template>

<script lang="ts">

  export default {
    name: "Input",
    setup(props){
      const {value} = props

      return value

    }
  }
</script>

<style lang="scss" scoped>

</style>