<template>
    <div @click="$emit('click',$event)" class="fish-ui-icon">
        {{name}}
        <svg class="icon" aria-hidden="true">
            <use :xlink:href=`#${name}`></use>
        </svg>
    </div>
</template>


<script lang="ts">
    import {computed,ref} from 'vue'
  export default {
    name: 'FishIcon',
    props:{
      name:{
        type:String,
        default:''
      }
    },
    setup(props,context){
      console.log(props,context,'xxxx');
      let {name} = props
      return {
        name
      }
      // let s = ref(1)
      // console.log(s);
      //
      // return {
      //     s
      // }
    }
  }
</script>

<style lang="scss" scoped>
.fish-ui-icon{
    height: 100px;
    width: 100px;
}
</style>