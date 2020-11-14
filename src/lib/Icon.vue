<template>
    <div @click="copyName(name)" class="fish-ui-icon" >
        <svg class="icon" aria-hidden="true">
            <use :xlink:href=`#${name}`></use>
        </svg>
        <div class="fish-ui-icon-name">
            {{name}}
        </div>
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

      function copyName(name){
        console.log('复制名字')
        alert(name)
        //调用剪切板方法
      }
      return {
        name,
        copyName
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
    border: 1px solid #F6F6F6;
    height: 102px;
    width: 16.6%;
    padding: 0 16px;
    color: #666;
    &-name{
        color: #666;

        margin-bottom: 16px;
    }
}
</style>