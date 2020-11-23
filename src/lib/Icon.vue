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

<style lang="scss">
.fish-ui-icon{
    display: flex;
    flex-direction:column;
    align-items: center;
    grid-area: icon;
    color: #666;
    margin: auto 0 ;
    &-name{
        color: #666;
        margin-bottom: 16px;
    }
}
.icon {
    width: 48px; height: 48px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>