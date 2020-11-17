import message from "./Message.vue";

import { createApp, h } from "vue";

export const openMessage = (options) => {
  console.log(options);
  const { title, content, ok, cancel } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  //创建一个div插入内容
  const app = createApp({
    render() {
      return h(
        message,
        {
          visible: true,
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              close();
            }
          },
          ok, cancel
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
};
