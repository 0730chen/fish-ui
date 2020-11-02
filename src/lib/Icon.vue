<template>
    <div @click="$emit('click',$event)" :class="classes">
        <svg class="icon">
            <use :xlink:href="'#'+IconName"></use>
        </svg>
    </div>
</template>


<script lang="ts">
    import {computed} from 'vue'
  declare const props: {
    name:string,
    class:string
  }

  export default {
    name: 'Icon',
    setup(props){
      console.log(props)
      let  classes = computed(()=>{
        return {
          'fish-ui-icon':true
        }
      })
      return {classes}
    }
  }
</script>

<style lang="scss" scoped>

</style>