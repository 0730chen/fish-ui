<template>
  <div>
    Hello World
  </div>
</template>

<script>
  //ref接受参数并将其包装在具有value属性的对象中，然后将其用于访问或更改反应变量的值
  //在对象内部包装值似乎是不必要的，但是需要使行为在JavaScript中不同数据类型之间保持统一。那是因为在JavaScript中，原始类型（例如Number或）String是通过值而不是通过引用传递的：
  import { ref } from 'vue'
  // 开始使用Composition API，我们首先需要一个可以实际使用它的地方。在Vue组件中，我们将此位置称为setup。
  //setUp使用的值必须要return出去
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props) {

    const counter = ref(0)
    const repositories = ref([])

    console.log(repositories);
    console.log(counter) // { value: 0 }
    console.log(counter.value) // 0

    counter.value++
    console.log(counter.value) // 1
    console.log(props) ;// { user: '' }

    return {
      counter,
      repositories
    } // anything returned here will be available for the rest of the component
  }
}
</script>
