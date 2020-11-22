import {createWebHistory, createRouter} from 'vue-router'
import Home from './view/Home.vue'
import TabsDemo from './view/Tabs/TabsDemo.vue'
import Demo from "./view/Buttons/Demo.vue";
import SwitchDemo from "./view/Switch/SwitchDemo.vue";
import Tag from "./view/Tag/TagDemo.vue";
import CheckBoxDemo from "./view/CheckBox/CheckBoxDemo.vue";
import IconDemo from "./view/IconDemo/IconDemo.vue";
import SelectDemo from "./view/SelectDemo/SelectDemo.vue";
import InputDemo from "./view/InputDemo/InputDemo.vue";
import MessageDemo from "./view/MessageDemo/MessageDemo.vue";
// import DialogDemo1 from "./components/Dialog/DialogDemo1.vue";
import Dialog from "./view/Dialog/DialogDemo1.vue";
import Doc from "./view/Doc/Doc.vue";

const history = createWebHistory()
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '/tabs', component: TabsDemo},
        {path: '/demo', component: Demo},
        {path: '/switch', component: SwitchDemo},
        {path: '/tag', component: Tag},
        {path: '/checkbox', component: CheckBoxDemo},
        {path: '/icon', component: IconDemo},
        {path: '/select', component: SelectDemo},
        {path:'/input',component: InputDemo},
        // {path:'/dialog',component: DialogDemo1},
        {path: '/message', component: MessageDemo},
        {path: '/dialog', component: Dialog}
      ]
    },
  ]
})

router.afterEach(()=>{
  console.log('路由切换执行')
})
