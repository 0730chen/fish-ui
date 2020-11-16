<template>
    <div class="fish-ui-icon" >
        <svg class="icon" aria-hidden="true">
            <use :xlink:href='iconName'></use>
        </svg>
    </div>
</template>


<script lang="ts">
    import {computed,ref} from 'vue'
    import clipboard from 'clipboard'
  export default {
    name: 'FishIcon',
    props:{
      name:{
        type:String,
        default:''
      }
    },
    setup(props,context){
      console.log(props,'我是传入的pros');
      let {name} = props
      console.log(name);
      let iconName = computed(()=>{
        console.log(name);
        return `#${name}`
      })
      console.log(iconName);

      return {
        name,
        iconName
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
    display: flex;
    flex-direction:column;
    align-items: center;
    grid-area: icon;
    width: 64px;
    height: 64px;
    padding: 0 16px;
    color: #666;
    &-name{
        color: #666;

        margin-bottom: 16px;
    }
}
</style>