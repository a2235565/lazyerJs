# 用户须知
> 运行前 请先配置好 lazyer_resource/conf.js 的参数
> 系统会自动导入jq v2.2.4 请勿重复导入


# 需要完善
 needTodoList.md文件内填写需要完善的内容

# 主题


# 目录结构
```
├── dome.html  默认单页不带理由案例
├── lazyerJs.js 头文件
├── theme  默认主题位置
├── uploadPhpDemo  上传图片后台demo
│   ├── abcd.php  demo
├── lazyer_resource  资源集
│   ├── conf.js  总配置文件
│   ├── core
│   │   ├── core.js  核心加载类
│   │   └── jq.js   jq
│   ├── module
│   │   ├── pageHelp.js 分页插件
│   │   ├── pageHelp_conf.js 配置文件
│   │   ├── readMe.md   编码须知
│   │   ├── renderTools.js   渲染插件
│   │   ├── renderTools_conf.js
│   │   ├── router.js     路由插件  需要配合view目录
│   │   ├── router_conf.js
│   │   ├── tools.js      通用工具
│   │   └── tools_conf.js
│   ├── static_html_resources   插件对应资源集
│   │   ├── msgboxCss    
│   │   │   └── css.css
│   │   └── pageHelpCss
│   │       └── css.css
│   └── view    路由模式下 对应路由路径
│       ├── home
│       │   └── index
│       │       ├── index.html    视图文件
│       │       ├── index_logic.js  视图对应逻辑类
│       │       ├── login.html
│       │       └── login_logic.js
│       └── project
│           ├── controller
│           │   ├── page.html
│           │   └── page_logic.js
│           └── index
│               ├── index.html
│               └── index_logic.js
├── readMe.md    须知
└── routerDemo.html   路由demo

