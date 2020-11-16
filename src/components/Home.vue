<template>
    <div>
        <div class="topnavAndBanner">
            <TopNav></TopNav>
            <div class="banner">
                <h1>轱辘UI</h1>
                <h2>一个面向学习者的 UI 框架</h2>
                <p class="actions">
                    <a href="https://github.com">GitHub</a>
                    <router-link to="/doc">开始</router-link>
                </p>
            </div>
        </div>
        <div class="features">
            <ul>
                <li>
                    <FishIcon name="Vue"></FishIcon>
                    <h3>基于 Vue 3</h3>
                    <p>骄傲地使用了 Vue 3 Composition API</p>
                </li>
                <li>
                    <FishIcon name="typescript"></FishIcon>
                    <h3>基于 TypeScript </h3>
                    <p>源代码采用 TypeScript 书写</p>
                </li>
                <li>
                    <FishIcon name="light"></FishIcon>
                    <h3>代码易读</h3>
                    <p>每个组件的源代码都极其简洁</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  //ref接受参数并将其包装在具有value属性的对象中，然后将其用于访问或更改反应变量的值
  //在对象内部包装值似乎是不必要的，但是需要使行为在JavaScript中不同数据类型之间保持统一。那是因为在JavaScript中，原始类型（例如Number或）String是通过值而不是通过引用传递的：
  import {ref, onMounted, watch, toRefs, computed} from 'vue'
  import TopNav from "./TopNav/TopNav.vue";
  import {FishIcon} from '../lib/index'
  // 开始使用Composition API，我们首先需要一个可以实际使用它的地方。在Vue组件中，我们将此位置称为setup。
  //setUp使用的值必须要return出去
  //setuP的第一个参数式props

  //在setUp中添加生命周期
  //为了使Composition API与Option API相比功能更完整，我们还需要一种在内部注册生命周期挂钩的方法setup。由于Vue导出了几个新功能，因此这是可能的。Composition API上的生命周期挂钩与Options API的名称相同，但前缀为on：即mounted看起来像onMounted。

  //这些函数接受一个回调，该回调将在组件调用该挂钩时执行。

  //watch,接受3个参数，一个无参考或getter函数，回调 ，可选配置选项

  //计算属性computed
  // 在此，该computed函数返回对类似getter的回调的输出（作为的第一个参数传递）的只读 Reactive Referencecomputed。为了进入价值新创建的计算的变量，我们需要使用.value属性，就像用ref。
  export default {
    name: 'Home',
    props: {
      msg: String
    },
    components: {TopNav, FishIcon},
    setup(props, content) {

      const counter = ref(0)
      console.log(content);
      const repositories = ref([])
      const ccc = toRefs([])

      console.log(repositories);
      console.log(ccc);
      console.log(counter) // { value: 0 }
      console.log(counter.value) // 0

      //生命周期
      //接受一个回调
      onMounted(() => {
        console.log('页面挂载了')
      })
      counter.value++
      console.log(counter.value) // 1
      console.log(props);// { user: '' }

      watch(counter, (newValue, oldValue) => {
        console.log(newValue);
        console.log(oldValue);
        console.log('The new counter value is: ' + counter.value)
      })
      const counter2 = ref(0)
      const twiceTheCounter = computed(() => counter2.value * 2)

      counter2.value++
      console.log(counter2.value) // 1
      console.log(twiceTheCounter.value) // 2
      watch(ccc, (newValue, oldValue) => {
        console.log(newValue, oldValue);
      })

      return {
        counter,
        repositories
      } // anything returned here will be available for the rest of the component
    }
  }
</script>

<style lang="scss" scoped>
    $green: #02bcb0;
    $border-radius: 4px;
    $color: #007974;
    .topnavAndBanner {
        background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
        clip-path: ellipse(80% 60% at 50% 40%);
        z-index: 10;
    }

    .features {
        margin: 64px auto;
        padding: 0 16px;
        @media (min-width: 800px) {
            width: 800px;
            > ul {
                > li {
                    width: 50%;
                }
            }
        }
        @media (min-width: 1200px) {
            width: 1200px;
            > ul {
                > li {
                    width: 33.3333%;
                }
            }
        }

        > ul {
            display: flex;
            flex-wrap: wrap;

            > li {
                margin: 16px 0;
                display: grid;
                justify-content: start;
                align-content: space-between;
                grid-template-areas: "icon title" "icon text";
                grid-template-columns: 80px auto;
                grid-template-rows: 1fr auto;

                > svg {
                    grid-area: icon;
                    width: 64px;
                    height: 64px;
                }

                > h3 {
                    grid-area: title;
                    font-size: 28px;
                }

                > p {
                    grid-area: text
                }
            }
        }
    }

    .banner {
        color: $color;
        padding: 100px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > .actions {
            padding: 8px 0;

            a {
                margin: 0 8px;
                background: $green;
                color: white;
                display: inline-block;
                padding: 8px 24px;
                border-radius: $border-radius;

                &:hover {
                    text-decoration: none;
                }
            }
        }
    }
</style>