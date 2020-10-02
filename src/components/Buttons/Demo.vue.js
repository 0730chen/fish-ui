"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Buttons_vue_1 = __importDefault(require("./Buttons.vue"));
console.log(Buttons_vue_1.default);
exports.default = {
    name: 'Demo',
    components: { Button: Buttons_vue_1.default },
    setup: function () {
    }
};
