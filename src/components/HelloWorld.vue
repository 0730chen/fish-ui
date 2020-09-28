<template>
  <div>
    Hello World
  </div>
</template>

<script>
  //ref接受参数并将其包装在具有value属性的对象中，然后将其用于访问或更改反应变量的值
  //在对象内部包装值似乎是不必要的，但是需要使行为在JavaScript中不同数据类型之间保持统一。那是因为在JavaScript中，原始类型（例如Number或）String是通过值而不是通过引用传递的：
  import { ref,onMounted,watch,toRefs } from 'vue'
  // 开始使用Composition API，我们首先需要一个可以实际使用它的地方。在Vue组件中，我们将此位置称为setup。
  //setUp使用的值必须要return出去

  //在setUp中添加生命周期
  //为了使Composition API与Option API相比功能更完整，我们还需要一种在内部注册生命周期挂钩的方法setup。由于Vue导出了几个新功能，因此这是可能的。Composition API上的生命周期挂钩与Options API的名称相同，但前缀为on：即mounted看起来像onMounted。

  //这些函数接受一个回调，该回调将在组件调用该挂钩时执行。

  //watch,接受3个参数，一个无参考或getter函数，回调 ，可选配置选项
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props) {

    const counter = ref(0)
    const repositories = ref([])
    const reopsitories2 = toRefs([])

    console.log(repositories);
    console.log(reopsitories2);
    console.log(counter) // { value: 0 }
    console.log(counter.value) // 0

    //生命周期
    //接受一个回调
    onMounted(()=>{
      console.log('页面挂载了')
    })
    counter.value++
    console.log(counter.value) // 1
    console.log(props) ;// { user: '' }

    watch(counter, (newValue, oldValue) => {
      console.log(newValue);
      console.log(oldValue);
      console.log('The new counter value is: ' + counter.value)
    })

    return {
      counter,
      repositories
    } // anything returned here will be available for the rest of the component
  }
}
</script>
