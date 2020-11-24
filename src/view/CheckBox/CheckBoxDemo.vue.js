class {
};
"fish-ui-checkbox-doc" >
;
component = "CheckBoxDemo1" > /Demo>
    < Demo;
component = "CheckBoxDemo2" > /Demo>
    < /div>
    < /template>
    < script;
lang = "ts" >
;
import { CheckBox } from "../../lib";
import CheckBoxDemo1 from './CheckBoxDemo1.vue';
import CheckBoxDemo2 from './CheckBoxDemo2.vue';
import Demo from "../Demo.vue";
export default {
    name: "CheckBoxDemo",
    components: { Demo, CheckBox },
    setup() {
        return {
            CheckBoxDemo1,
            CheckBoxDemo2
        };
    }
}
    < /script>
    < style;
lang = "scss";
scoped >
        .fish - ui - checkbox - doc;
{
    display: flex;
    flex: 1;
    flex - direction;
    column;
    fish - ui - checkbox - demo;
    {
        text - align;
        left;
        flex - direction;
        column;
        border: 1;
        px;
        solid;
        f6f6f6;
        fish - ui - checkbox + .fish - ui - checkbox;
        {
            margin - left;
            16;
            px;
        }
            & -example;
        {
            padding: 16;
            px;
            border: 1;
            px;
            solid;
            f6f6f6;
        }
            & -code;
        {
            padding: 16;
            px;
        }
    }
}
/style>;
