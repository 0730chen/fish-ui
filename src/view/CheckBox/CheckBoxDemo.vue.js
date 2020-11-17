class {
};
"fish-ui-checkbox-doc" >
    class {
    };
"fish-ui-checkbox-demo" >
    class {
    };
"fish-ui-checkbox-demo-example" >
    label;
"复选";
theme = "black";
color = "black" > /CheckBox>
    < CheckBox;
label = "禁用";
disabled > /CheckBox>
    < /div>
    < div;
class {
}
"fish-ui-checkbox-demo-code" >
    代码示例
    < /div>
    < /div>
    < div;
class {
}
"fish-ui-checkbox-demo" >
    class {
    };
"fish-ui-checkbox-demo-example" >
    label;
"边框选择";
border > /CheckBox>
    < CheckBox;
label = "另一种颜色";
border > /CheckBox>
    < CheckBox;
label = "大边框";
border > /CheckBox>
    < CheckBox;
label = "色彩";
border > /CheckBox>
    < /div>
    < div;
class {
}
"fish-ui-checkbox-demo-code" >
    代码实例
    < /div>
    < /div>
    < /div>
    < /template>
    < script;
lang = "ts" >
;
import { CheckBox } from "../../lib";
export default {
    name: "CheckBoxDemo",
    components: { CheckBox }
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
