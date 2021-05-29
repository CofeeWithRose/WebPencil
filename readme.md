目标：h5的本地存储问题解决后的pwa手绘应用.

转到 https://github.com/CofeeWithRose/WebPen 进行重构 

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
画笔bug
缩放问题
历史记录性能问题
自动保存慢

图层多后的性能问题



存储：
<!-- FileApi对存储对ios的支持   -->
FileApi支持锁功能，让一批任务执行完成后再执行下一读写指令。 
workstorage支持图层的删除.

核心部分：
4、需要统一对canvas的手势，画笔的事件进行管理.

插件部分：
图层的上下层拖拽交互，不可见操作。
画笔的粗细、透明度保留上次的设置。
历史记录批量写入持久化层
导出图片分享功能
选色的受控

新特性的开发：
1、拾色
2、选区移动

性能：
图层多内存过大问题





