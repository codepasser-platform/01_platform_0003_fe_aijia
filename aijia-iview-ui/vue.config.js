const pages_mapping = {
    /**
     * 主入口[Web]
     */
    app: {
        // page 的入口
        entry: 'src/app/main.ts',
        // 模板来源
        template: 'public/app.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: process.env.VUE_APP_TITLE,
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'app']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.ts'
    /**
     * 子入口[Client]
     */
    client: {
        // page 的入口
        entry: 'src/app-client/main.ts',
        // 模板来源
        template: 'public/client.html',
        // 在 dist/index.html 的输出 // 独立部署时需要转换index.html
        filename: 'client.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: process.env.VUE_APP_TITLE,
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'client']
    },
};

let pages = {};
let outputDir = 'dist';
let build_process = process.argv[2] === 'build';
let build_project = undefined;
if (!build_process) {
    pages = pages_mapping;
} else {
    build_project = process.argv[3] !== '--mode' ? process.argv[3] : undefined;
    if (build_project) {
        pages[build_project] = pages_mapping[build_project];
        outputDir = 'dist/' + build_project;
    } else {
        pages = pages_mapping;
    }
}
console.log(
    '<command :', process.argv[2], '>',
    '<env :', process.env.NODE_ENV, '>',
    '<build_process:', build_process, '>',
    '<build_project:', build_project ? build_project : 'ALL', '>',
    '<outputDir:', outputDir, '>'
);
console.table([pages]);

module.exports = {
    /**
     * 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath
     */
    /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
    /**
     * 部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致，但是 Vue CLI 在一些其他地方也需要用到这个值，
     * 所以请始终使用 publicPath 而不要直接修改 webpack 的 output.publicPath。默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，
     * 例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。
     * 例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
     * 这个值也可以被设置为空字符串 ('') 或是相对路径 ('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径，
     * 也可以用在类似 Cordova hybrid应用的文件系统中。
     */
    publicPath: process.env.VUE_APP_CONTEXT,
    /**
     * 输出文件目录：在npm run build时，生成文件的目录名称
     */
    outputDir: outputDir,
    /**
     * 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
     */
    assetsDir: 'assets',
    /**
     * 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
     */
    indexPath: 'index.html',
    /**
     * 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
     */
    filenameHashing: true,
    /**
     * 在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件。其值应该是一个对象，对象的 key 是入口的名字，value 是：
     * * 一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)；
     * * 或一个指定其 entry 的字符串。
     */
    pages: pages,
    /**
     * 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
     */
    lintOnSave: false,
    /**
     * 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
     */
    runtimeCompiler: false,
    /**
     * 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
     */
    transpileDependencies: [
        // /[/\\]node_modules[/\\]test[/\\]/,
        // /[/\\]node_modules[/\\]test[/\\]test1[/\\]/,
        // /[/\\]node_modules[/\\][@\\]test[/\\]test1[/\\]/,
        // /[/\\]node_modules[/\\]dom7[/\\]/,
        // /[/\\]node_modules[/\\]swiper[/\\]/,
        // /[/\\]node_modules[/\\]element-ui[/\\]packages[/\\]/,
        // /[/\\]node_modules[/\\]element-ui[/\\]src[/\\]/,
        // /[/\\]node_modules[/\\]capital-ui[/\\]src[/\\]/
    ],
    /**
     * 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
     */
    productionSourceMap: false,
    /**
     * 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
     * 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响。
     */
    crossorigin: undefined,
    /**
     * 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity
     * (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。 需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 -
     * 直接写在模版 (public/index.html) 中的标签不受影响。 另外，当启用 SRI 时，preload resource hints 会被禁用，因为 Chrome 的一个
     * bug 会导致文件被下载两次。
     */
    integrity: false,
    /**
     * TODO configureWebpack
     */
    // configureWebpack:{},
    /**
     * chainWebpack
     */
    chainWebpack: config => {
        config.entry('app').add('babel-polyfill');
        config.entry('client').add('babel-polyfill');
    },
    /**
     * css loader options
     */
    css: {
        loaderOptions: {
            // Switch SCSS
            // @see https://github.com/webpack-contrib/sass-loader
            sass: {
                prependData: `@import '@/assets/styles/variables.scss';`
            },
            // Switch LESS
            // @see https://github.com/webpack-contrib/less-loader
            less: {
                lessOptions: {
                    javascriptEnabled: true
                },
                appendData: `@import '@/assets/styles/variables.less';`
            },
            // postcss: {
            //     plugins: [
            //         /** Default values
            //          * rootValue: 100,
            //          * unitPrecision: 5,
            //          * selectorBlackList: [],
            //          * propWhiteList: [],
            //          * propBlackList: [],
            //          * ignoreIdentifier: false,
            //          * replace: true,
            //          * mediaQuery: false,
            //          * minPixelValue: 0,
            //          * exclude: undefined
            //          */
            //         require('postcss-plugin-px2rem')(
            //             {
            //                 /* 换算基数, 比例：16px:100% 12px:75% 10px:62.5% */
            //                 rootValue: 100,
            //                 /* 允许REM单位增长到的十进制数字 */
            //                 unitPrecision: 5,
            //                 /* 选择器黑名单 */
            //                 selectorBlackList: [],
            //                 /* 属性白名单 */
            //                 propWhiteList: [],
            //                 /* 属性黑名单 */
            //                 propBlackList: [], // '*','!border'
            //                 /* 忽略单个属性(boolean/string)，启用后，replace将自动设置为true。*/
            //                 ignoreIdentifier: false,
            //                 /* 替换包含REM的规则(boolean)，而不是添加回退。*/
            //                 replace: true,
            //                 /* 允许在媒体查询中转换px(boolean)。*/
            //                 mediaQuery: false,
            //                 /* 设置要替换的最小像素值 */
            //                 minPixelValue: 0,
            //                 /* 排除路径 (reg)
            //                  exclude: /(node_modules)|(app\\)|(app\/)/
            //                 */
            //                 exclude: /(node_modules)|(common)/
            //             }
            //         )
            //     ]
            // }
        }
    },
    /**
     * 所有 webpack-dev-server 的选项都支持。
     * 注意：有些值像 host、port 和 https 可能会被命令行参数覆写。
     * 有些值像 publicPath 和 historyApiFallback 不应该被修改，
     * 因为它们需要和开发服务器的 publicPath 同步以保障正常的工作
     */
    devServer: {
        host: '127.0.0.1', /* 设置为0.0.0.0则所有的地址均能访问 */
        port: 7001, /* 设置端口 */
        open: true, /* 自动打开浏览器 */
        https: false,
        hot: true,  /* 热部署 */
        /* 使用代理 */
        proxy: {
            '^/web-api/': {
                target: 'http://127.0.0.1:8001',//后台服务器地址
                changeOrigin: true, /* 允许跨域 */
                pathRewrite: {//后台访问serverPath
                    '^/web-api/': '/web-api/'
                }
            }
        },
    },

    /**
     * 设置 icon.
     */
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    }
};
