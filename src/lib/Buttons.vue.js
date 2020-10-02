"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
exports.default = {
    name: 'Buttons',
    props: {
        theme: {
            type: String,
            default: "button",
        },
        size: {
            type: String,
            default: "normal",
        },
        level: {
            type: String,
            default: "normal",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
};
var theme = props.theme, size = props.size, level = props.level;
//通过计算属性改变该组件的class
exports.classes = vue_1.computed(function () {
    var _a;
    return _a = {},
        _a["fish-theme-" + theme] = theme,
        _a["fish-size-" + size] = size,
        _a["fish-level-" + level] = level,
        _a;
});
