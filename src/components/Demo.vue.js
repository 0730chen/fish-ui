class {
};
"demo" >
    {};
{
    component.__sourceCodeTitle;
}
/h2>
    < div;
class {
}
"demo-component" >
;
is = "component" /  >
    /div>
    < div;
class {
}
"demo-actions" >
;
"hideCode";
v - ;
if ( = "codeVisible" > 隐藏代码 < /Button>
    < Button)
"showCode";
v - ;
 > 查看代码 < /Button>
    < /div>
    < div;
class {
}
"demo-code";
v - ;
if ( = "codeVisible" >
    class {
    })
     = "language-html";
v - html;
"html" > /pre>
    < /div>
    < /div>
    < /template>
    < script;
lang = "ts" >
;
import Button from '../lib/Buttons.vue';
import 'prismjs';
import 'prismjs/themes/prism.css';
import { computed, ref } from 'vue';
const Prism = window.Prism;
console.log(Prism);
export default {
    name: "Demo",
    components: {
        Button
    },
    props: {
        component: Object
    },
    setup(props) {
        console.log(props);
        const html = computed(() => {
            return Prism.highlight(props.component._sourceCode, Prism.languages.html, 'html');
        });
        const codeVisible = ref(false);
        const showCode = () => {
            codeVisible.value = true;
        };
        const hideCode = () => {
            codeVisible.value = false;
        };
        return {
            Prism,
            html,
            codeVisible,
            showCode,
            hideCode
        };
    }
}
    < /script>
    < style;
lang = "scss";
scoped >
    $border - color;
d9d9d9;
demo;
{
    border: 1;
    px;
    solid;
    $border - color;
    margin: 16;
    px;
    0;
    32;
    px;
        > h2;
    {
        font - size;
        20;
        px;
        padding: 8;
        px;
        16;
        px;
        border - bottom;
        1;
        px;
        solid;
        $border - color;
    }
        & -component;
    {
        padding: 16;
        px;
    }
        & -actions;
    {
        padding: 8;
        px;
        16;
        px;
        border - top;
        1;
        px;
        dashed;
        $border - color;
    }
        & -code;
    {
        padding: 8;
        px;
        16;
        px;
        border - top;
        1;
        px;
        dashed;
        $border - color;
            > pre;
        {
            line - height;
            1.1;
            font - family;
            Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
}
/style>;
