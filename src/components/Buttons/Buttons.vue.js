"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
exports.classes = computed(function () {
    var _a;
    return _a = {},
        _a["gulu-theme-" + theme] = theme,
        _a["gulu-size-" + size] = size,
        _a["gulu-level-" + level] = level,
        _a;
});
