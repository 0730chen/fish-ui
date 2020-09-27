<template>
  <div>
    Hello World
  </div>
</template>

<script>
  // 开始使用Composition API，我们首先需要一个可以实际使用它的地方。在Vue组件中，我们将此位置称为setup。
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props) {
    import { ref } from 'vue'

    const counter = ref(0)

    console.log(counter) // { value: 0 }
    console.log(counter.value) // 0

    counter.value++
    console.log(counter.value) // 1
    console.log(props) ;// { user: '' }

    return {} // anything returned here will be available for the rest of the component
  }
}
</script>
