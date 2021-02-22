# reg-t

文件生成器

## 使用

项目根目录下创建 `reg-t.config.js` 或 `reg-t.config.json` 配置文件

```json
{
  "template": {
    "default": {
      "path": "templates",
      "output": "src/component"
    }
  }
}
```

创建模板文件 `templates/__name__.js`
```jsx
import React from 'react'

const __name__ = () => <h1>__name__ template</h1>
```

使用cli

```shell
npx reg-t MyInput
```

会在 `src/component` 下创建 `MyInput/MyInput.js`文件

```js
import React from 'react'

const MyInput = () => <h1>MyInput template</h1>
```
