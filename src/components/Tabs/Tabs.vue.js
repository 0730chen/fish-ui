"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Tab1_vue_1 = __importDefault(require("./Tab1.vue"));
var Tab2_vue_1 = __importDefault(require("./Tab2.vue"));
var HelloWorld_vue_1 = __importDefault(require("../HelloWorld.vue"));
var vue_1 = require("vue");
exports.default = {
    components: { Tabs: HelloWorld_vue_1.default },
    setup: function (props, context) {
        var x = vue_1.ref('tab1');
        var setTab = function (n) {
            if (n === 1) {
                x.value = Tab1_vue_1.default;
            }
            else {
                x.value = Tab2_vue_1.default;
            }
            return { x: x, setTab: setTab, Tab1: Tab1_vue_1.default, Tab2: Tab2_vue_1.default };
        };
        console.log(props);
        console.log(context);
    }
};
