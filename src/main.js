"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var App_vue_1 = __importDefault(require("./App.vue"));
require("./index.css");
var vue_router_1 = require("vue-router");
var HelloWorld_vue_1 = __importDefault(require("./components/HelloWorld.vue"));
var TabsDemo_vue_1 = __importDefault(require("./components/Tabs/TabsDemo.vue"));
var Demo_vue_1 = __importDefault(require("./components/Buttons/Demo.vue"));
var history = vue_router_1.createWebHistory();
var router = vue_router_1.createRouter({
    history: history,
    routes: [
        { path: '/', component: HelloWorld_vue_1.default },
        { path: '/tabs', component: TabsDemo_vue_1.default },
        { path: '/demo', component: Demo_vue_1.default }
    ]
});
var app = vue_1.createApp(App_vue_1.default);
app.use(router);
app.mount('#app');
