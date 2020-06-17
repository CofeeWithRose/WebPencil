目标：h5的本地存储问题解决后的pwa手绘应用.

访问地址： https://cofeewithrose.github.io/WebPencil/

首次启动步骤：

1、设置npm源：npm config set registry https://registry.npm.taobao.org

2、 安装 npm i

3、 启动 npm start

本地地址： http://localhost/WebPencil/


技术栈
react 
react-hooks
typescript
antd

核心部分架构图：
架构图主要描述画板核心部分（src/pages/paint）
见intro.png

TODO:
存储：
1、FileApi对存储对ios的支持
2、FileApi支持锁功能，让一批任务执行完成后再执行下一读写指令。 
3、workstorage支持图层的删除.

核心部分：
4、需要统一对canvas的手势，画笔的事件进行管理.

插件部分：
5、图层的移动拖拽交互。
6、画笔的粗细、透明度保留上次的设置。
7、历史记录批量写入持久化层



