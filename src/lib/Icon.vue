<template>
    11111
    <div>1111</div>
    <div @click="$emit('click',$event)" class="fish-ui-icon">
        {{name}}
        <svg class="icon" aria-hidden="true">
            <use xlink:href="fish-ui-auto"></use>
        </svg>
    </div>
    <slot></slot>
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
      console.log(props,context);
      console.log(Object.entries(props));
      const name =ref('小四')
      const age=ref(18)
      console.log(name,age);
      return {}
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