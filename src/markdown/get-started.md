## 开始使用

首先引入下载好的组件
```javascript
//引入组件
import {Button} from 'fish-element'
//引入组件样式

//组件注册
export default {
components:{
  Button
}
}
```

#### 使用组件

```vue
<template>
 <Button>普通按钮</Button>
 <Button>你好</Button>
 <Button theme="link" size="large">你好</Button>
 <Button theme="text">你好</Button>
</template>
```