v - ;
if ( = "visible" >
    to)
     = "body" >
        class {
        };
"fish-dialog-overlay";
"onClickOverlay" > /div>
    < div;
class {
}
"fish-dialog-wrapper" >
    class {
    };
"fish-dialog" >
    name;
"title" /  >
;
"close";
class {
}
"fish-dialog-close" > /span>
    < /header>
    < main >
    name;
"content" /  >
    /main>
    < footer >
    level;
"main";
"onClickOk" > OK < /Buttons>
    < Buttons;
"onClickCancel" > Cancel < /Buttons>
    < /footer>
    < /div>
    < /div>
    < /Teleport>
    < /template>
    < /template>
    < script;
lang = "ts";
setup = "props, context" >
;
import Buttons from "./Buttons.vue";
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        closeOnClickOverlay: {
            type: Boolean,
            default: true
        },
        ok: {
            type: Function
        },
        cancel: {
            type: Function
        }
    },
    components: {
        Buttons,
    },
};
export const close = () => {
    context.emit('update:visible', false);
};
export const onClickOverlay = () => {
    if (props.closeOnClickOverlay) {
        close();
    }
};
export const onClickOk = () => {
    console.log(this);
    if (props.ok?.() !== false) {
        close();
    }
};
export const onClickCancel = () => {
    props.cancel?.();
    close();
};
/script>
    < style;
lang = "scss" >
    $radius;
4;
px;
$border - color;
d9d9d9;
fish - dialog;
{
    background: white;
    border - radius;
    $radius;
    box - shadow;
    0;
    0;
    3;
    px;
    fade_out(black, 0.5);
    min - width;
    15e;
    m;
    max - width;
    90 % ;
        & -overlay;
    {
        position: fixed;
        top: 0;
        left: 0;
        width: 100 % ;
        height: 100 % ;
        background: fade_out(black, 0.5);
        z - index;
        10;
    }
        & -wrapper;
    {
        position: fixed;
        left: 50 % ;
        top: 50 % ;
        transform: translate(-50 % , -50 % );
        z - index;
        11;
    }
        > header;
    {
        padding: 12;
        px;
        16;
        px;
        border - bottom;
        1;
        px;
        solid;
        $border - color;
        display: flex;
        align - items;
        center;
        justify - content;
        space - between;
        font - size;
        20;
        px;
    }
        > main;
    {
        padding: 12;
        px;
        16;
        px;
    }
        > footer;
    {
        border - top;
        1;
        px;
        solid;
        $border - color;
        padding: 12;
        px;
        16;
        px;
        text - align;
        right;
    }
        & -close;
    {
        position: relative;
        display: inline - block;
        width: 16;
        px;
        height: 16;
        px;
        cursor: pointer;
            & ;
        before,
                & ;
        after;
        {
            content: '';
            position: absolute;
            height: 1;
            px;
            background: black;
            width: 100 % ;
            top: 50 % ;
            left: 50 % ;
        }
            & ;
        before;
        {
            transform: translate(-50 % , -50 % );
            rotate(-45, deg);
        }
            & ;
        after;
        {
            transform: translate(-50 % , -50 % );
            rotate(45, deg);
        }
    }
}
/style>;
