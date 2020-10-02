"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
exports.default = {
    name: 'TopNav',
    props: {
        toggleMenuButtonVisible: {
            type: Boolean,
            default: false
        }
    },
    setup: function () {
        var menuVisible = vue_1.inject("menuVisible"); // get
        var toggleMenu = function () {
            if (menuVisible) {
                menuVisible.value = !menuVisible.value;
            }
        };
        return {
            toggleMenu: toggleMenu
        };
    },
};
