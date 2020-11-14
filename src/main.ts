import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import {createWebHistory,createRouter} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TabsDemo from './components/Tabs/TabsDemo.vue'
import Demo from "./components/Buttons/Demo.vue";
import SwitchDemo from "./components/Switch/SwitchDemo.vue";
import Tag from "./components/Tag/TagDemo.vue";
import CheckBoxDemo from "./components/CheckBox/CheckBoxDemo.vue";
import IconDemo from "./components/IconDemo/IconDemo.vue";
import SelectDemo from "./components/SelectDemo/SelectDemo.vue";
import InputDemo from "./components/InputDemo/InputDemo.vue";
import MessageDemo from "./components/MessageDemo/MessageDemo.vue";
// import Dialog from "./components/Dialog/DialogDemo1.vue";

const history = createWebHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:HelloWorld},
        {path:'/tabs',component: TabsDemo},
        {path:'/demo',component: Demo},
        {path:'/switch',component: SwitchDemo},
        {path:'/tag',component: Tag},
        {path:'/checkbox',component: CheckBoxDemo},
        {path:'/icon',component: IconDemo},
        {path:'/select',component: SelectDemo},
        {path:'/input',component: InputDemo},
        {path:'/message',component: MessageDemo}
        // {path:'/dialog',component: Dialog}
        ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
