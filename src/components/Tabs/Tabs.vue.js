"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorld_vue_1 = __importDefault(require("../HelloWorld.vue"));
var vue_1 = require("vue");
exports.default = {
    components: { Tabs: HelloWorld_vue_1.default },
    props: {
        panes: Array
    },
    setup: function (props) {
        var x = vue_1.ref(props.panes[0].content);
        console.log(x.value);
        console.log(props.panes);
        var setTab = function (p) {
            x.value = p.content;
        };
        var buttons = vue_1.ref([]);
        //组件挂载
        vue_1.onMounted(function () {
            console.log(buttons);
            // const button[index]:HTMLElement = buttons.value[0]
            // console.log(button0);
            // // button0
            // const width = button0.getBoundingClientRect()
            // console.log(width)
        });
        return { x: x, setTab: setTab, buttons: buttons };
    }
};
