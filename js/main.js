!function(){
    let start = document.getElementById('start')
    let code = document.getElementById('code')
    let innerStyle = document.getElementById('innerStyle')
    let audio = document.getElementById('audioElement')
    audio.volume = 0.2
    let content1 = `/*
* 面试官您好！我是吴博文。
* 接下来我将以代码的形式向您介绍我自己
* 首先准备一些样式
*/
*{
    transition: all 1s;
}
.code{
    background-color: #EAE8E9;
    padding: 16px;
    width: 50%;
    transform: rotateY(20deg);
}

/* 咱给页面来些颜色，给代码高亮吧 */
.token.property{ color: #999; }
.token.selector{ color: #690; }
.token.property{ color: #905; }

/* 咱来一个 3D 动画效果吧 */
.code{
    animation: breath 0.5s infinite alternate-reverse;
}

/* 好了，我正式的介绍一下我自己 */

/* 但是我需要一张白纸 */

.codeWrapper{
    left: 0;
}
`
let content2 = `
/* 于是我就可以在白纸上写字了，请看右边 */
`

let content3 = `## 自我介绍
我是吴博文，今年24岁，毕业于青岛科技大学，自学前端一年，应聘贵公司的前端开发岗位。
## 职业技能
1. 了解 HTTP 协议，能够根据 HTTP 请求、响应和状态码排查问题。
2. 掌握 HTML5、CSS3 和 JavaScript 技术。
3. 掌握 jQuery 的 DOM 操作、属性操作、事件、AJAX等相关知识技能，能够使用 jQuery 实现日常的 Tab 、轮播等效果
4. 熟悉 CSS 预处理语言 Less、SASS
5. 能运用模块化、面向对象的方式进行编程
6. 熟悉 VueJS 进行模块开发，熟悉双向数据绑定。
7. 掌握 JSON 语言，并熟悉其数据交换格式。
8. 了解数据库，了解如何使用 Node.js 搭建本地 server 模拟接口返回数据测试 AJAX 接口
9. 了解命令行、npm的使用
10. 能使用 Animate、Tween.js、Swiper、Bootstrap、Vegas 等前端样式库和框架进行开发
11. 熟练使用 Webstorm、VsCode、终端等开发工具

## 项目介绍

1. 个人网上简历
    - 功能介绍：
        1. 进入网站加载动画
        2. 顶部导航 sticky + 自动高亮 + 二级菜单
        3. 内容模块自动向上滚动
        4. 作品集的轮播
        5. 留言功能
    - 技术细节：使用了 HTML5(SVG)、CSS3、原生JavaScript等技术，使用 AJAX + LeanCloud 将用户留言保存到服务器，使用立即执行函数 + 闭包 + 全局变量将代码进行模块化，每个模块都运用 MVC 思想，最终站在全局角度，将 MVC 提炼出来创建了全局变量，从而达到复用代码的目的
    - 技术栈：CSS3 | 原生JavaScript | AJAX | 插件
    - [代码地址 | 预览链接](https://github.com/bowen-wu/resume)
2. PC 端导航页面
    - 功能介绍：
        1. 用户自定义头像上传
        2. 搜索框搜索，可以选择 Google 或者 百度
        3. 键盘按键 + 鼠标点击跳转相应网站功能
        4. 点击修改按钮 或者 点击没有定义网站的按钮 会弹出设置界面。
    - 技术细节：使用了 HTML5、CSS3、原生 JavaScript 和 Animation 插件等技术，使用 CSS3 的阴影 + 动画，使得页面更加美观，使用 localStorage 将用户的设置保存在本地，将代码分成顶部搜索模块和键盘模块，每个模块都运用了 MVC 思想，从而达到了优化的目的
    - 技术栈：HTML5 | CSS3 | 原生 JavaScript | AJAX | 插件
    - [代码地址 | 预览链接](https://github.com/bowen-wu/nav-web)
3. 移动端 Canvas 画板
    - 功能介绍：支持 PC 端和移动端，包含 画笔 、橡皮擦 、选择颜色 、画笔粗细 、清空 和 下载 功能
    - 技术细节：使用了 canvas API  + 原生 JS 进行开发 HTML 5 & CSS 3 inside 使用了 Animation 插件 HTML5中的 canvas 元素、原生 JavaScript、Animation 插件
    - [代码地址 | 预览链接](https://github.com/bowen-wu/drawing-board)

还有一些 demo 在我的 GitHub 主页，[我的 GitHub 主页](https://github.com/bowen-wu)

## 博客
我写了几篇博客，我的[个人博客](https://bowen-wu.github.io/)

## 联系方式
手机：13793248162
邮箱：bowen-stackoverflow@foxmail.com
`

let content4 = `
/* 接下来，把我们的 Markdown 转换为 HTML 吧 */
`

let content5 = `
/* 这就是我个人的大致情况，谢谢观看 */
`

    function writeCode(content,cb) {
        let id, n = 0
        id = setTimeout(function run() {
            n += 1
            code.innerHTML += content.slice(n - 1, n)
            code.innerHTML = Prism.highlight(code.textContent, Prism.languages.css);
            innerStyle.innerHTML += content.slice(n - 1, n)
            code.scrollTop = code.scrollHeight
            if (n < content.length) {
                id = setTimeout(run, 50)
            } else {
                cb && cb.call()
            }
        }, 50)
    }
    function createPaper(cb){
        let paperWrapper = document.createElement('div')
        paperWrapper.id = 'paperWrapper'
        document.body.appendChild(paperWrapper)
        let paper = document.createElement('pre')
        paper.id = 'paper'
        paperWrapper.appendChild(paper)
        cb.call()
    }

    function writeMarkdown(content,cb){
        let writeText, n = 0
        let id = setTimeout(function run() {
            n += 1
            writeText = content.slice(n - 1, n)
            paper.textContent += writeText
            paper.scrollTop = paper.scrollHeight
            if (n < content.length) {
                id = setTimeout(run, 30)
            }else{
                cb.call()
            }
        }, 30)
    }

    function markdownToHtml(content, cb) {
        document.getElementById('paper').innerHTML = marked(content)
        paper.scrollTop = 0
        cb.call()
    }

    start.addEventListener('click', (e) => {
        e.currentTarget.classList.add('active')
        audio.play()
        writeCode(content1, () => {
            createPaper(() => {
                writeCode(content2, () => {
                    writeMarkdown(content3, () => {
                        writeCode(content4, () => {
                            markdownToHtml(content3, () => {
                                writeCode(content5, () => {
                                    code.classList.add('active')
                                    paperWrapper.classList.add('active')
                                })
                            })
                        })
                    })
                })
            })
        })
    })
    
}.call()