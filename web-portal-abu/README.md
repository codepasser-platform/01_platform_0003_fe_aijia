## 环境篇 ##

### 安装开发环境

- 安装nodejs

    https://nodejs.org/en/

> 注意：Angular CLI 需要Node 4.X 和 NPM 3.X 以上的版本支持。

- 卸载 angular cli

>
    # 目录 /usr/local/lib/node_modules
    sudo npm uninstall -g @angular/cli
    sudo npm cache clean

- 全局安装

>
    sudo npm install -g typescript
    sudo npm install -g @angular/cli

    # 选择淘宝npm库: --registry=http://registry.npm.taobao.org/ --disturl=https://npm.taobao.org/dist
    sudo npm install -g typescript --registry=http://registry.npm.taobao.org/ --disturl=https://npm.taobao.org/dist
    sudo npm install -g @angular/cli --registry=http://registry.npm.taobao.org/ --disturl=https://npm.taobao.org/dist


    # 注意: 重新安装时 npm ERR! Refusing to delete /usr/local/bin/ng: ../lib/node_modules/angular-cli/bin/ng # symlink target is not controlled by npm /usr/
    local
    # 需要手动删除 ln

    # 检查安装成功
    ng -v

- 在浏览器中打开Angular文档并搜索当前关键字

>
    ng doc

# ***************************** #

## 基础篇 ##

### 创建项目

- 创建一个新的 Angular 项目

>
    ng help
    ng new[options] <name>

    .eg : # 创建项目  样式文件使用scss ,引入routing组件
    ng new angular4 --style scss --routing true

- 运行应用

>
    # 启动服务 默认端口 4200, 默认监听文件更新, 启动后打开浏览器
    ng serve --port 8080 --watch true --open true

- 在项目中构建新代码

>
    ng g[options]

- 将自动完成功能添加到ng命令的shell中

>
    ng completion

- 使用protractor在当前应用中运行e2e测试

>
    ng e2e

- 使用clang-format格式化当前项目代码

>
    ng format

- 在Angular CLI配置中设置值

>
    ng get[options]

### 开发构建

>
    ng build --target=development --environment=dev
    ng build --dev --e=dev
    ng build --dev
    ng build

- 构建生产应用程序，设置GitHub存储库，然后发布应用程序

>
    ng github-pages:deploy [options]

- 在项目上运行codelyzer linter

>
    ng lint

- 使用 karma 运行单元测试

>
    ng test [options]

- 输出cli版本, node 版本和操作系统信息

>
    ng version

### 生产构建

>
    ng build --target=production --environment=prod
    ng build --prod --env=prod
    ng build --prod

--------------------------

## 配置篇 ##

### Routing

- 引入routing的方式

>
    # 创建应用时 指定引入routing组件
    ng new angular4 --style scss --routing true

### 引入 Bootstrap

- 文档

>
    https://ng-bootstrap.github.io/#/getting-started
    http://getbootstrap.com/

- 安装 ng-bootstrap & bootstrap@4.0.0-alpha.6

>
    npm install --save @ng-bootstrap/ng-bootstrap
    npm install --save bootstrap
    # 安装后会在 package.json中声明依赖

-  app.module.ts中添加bootstrap依赖

>
    # 引入
    import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

    @NgModule({
      declarations: [
        AppComponent,
        HomeComponent,
        BashboardComponent
      ],
      imports: [
        # 引入
        NgbModule.forRoot(),
        ...
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }

- 添加 scss依赖 : style.scss

>
    @import "style/theme";
    @import "style/layout";
    @import '~bootstrap/scss/bootstrap.scss';

### 新建模块(添加子路由 - 懒加载)

- 命令

>
    ng g m view/index --routing true
      CREATE src/app/view/index/index-routing.module.ts (248 bytes)
      CREATE src/app/view/index/index.module.spec.ts (267 bytes)
      CREATE src/app/view/index/index.module.ts (275 bytes)

    ng g c view/index
      CREATE src/app/view/index/index.component.scss (0 bytes)
      CREATE src/app/view/index/index.component.html (24 bytes)
      CREATE src/app/view/index/index.component.spec.ts (621 bytes)
      CREATE src/app/view/index/index.component.ts (266 bytes)
      UPDATE src/app/view/index/index.module.ts (341 bytes)

- app-routing 中配置 Routes, 引入 loadChildren Module

>
     /* index */
      {path: '', loadChildren: 'src/app/view/index/index.module#IndexModule'},
      /* default */
      {path: '**', redirectTo: '', pathMatch: 'full'}

- home-routing 中配置 Routes, 引入 HomeComponents

>
    import { HomeComponent } from './home.component';
    ...
    {
        path: '', component: IndexComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent }
        ]
    }

- app.component.html 中显示router link连接

>
    <a routerLink="/home" routerLinkActive="active">home</a>

### 引入 fontawesome

> npm install

    # npm install
    npm install --save @fortawesome/fontawesome-svg-core
    npm install --save @fortawesome/angular-fontawesome
    # 可选
    npm install --save @fortawesome/free-solid-svg-icons
    npm install --save @fortawesome/free-brands-svg-icons
    npm install --save @fortawesome/free-regular-svg-icons

> import with app.module.ts

    import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
    import {library} from '@fortawesome/fontawesome-svg-core';
    import {fas} from '@fortawesome/free-solid-svg-icons';
    import {far} from '@fortawesome/free-regular-svg-icons';
    import {fab} from '@fortawesome/free-brands-svg-icons';
    ...
    library.add(fas, far, fab);
    ...
    imports: [
        ...
        FontAwesomeModule,
        ...
      ],