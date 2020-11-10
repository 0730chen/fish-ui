<template>
    <div @click="$emit('click',$event)" :class="classes">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="fish-ui-auto"></use>
        </svg>
    </div>
</template>


<script lang="ts">
    import {computed} from 'vue'
    console.log(11111)

  export default {
    name: 'Icon',
    props:{
      name:{
        type:String,
        default:''
      }
    },
    setup(props){
      console.log(props)
      console.log(1111)
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