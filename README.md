# 研究地图 · 在线协作版（GitHub Pages + 私有数据仓库）

一个页面、三栏：**① 想提取的指标 → ② 计量如何构造 → ③ 计量特征结果分析**，栏与栏之间用线连起来。合作者用分享链接打开、填个名字，就能直接修改卡片、上传附件、写评论，不需要 GitHub 账号。

做法和「修改地图」（response letter 那个网站）完全一样：网页放在公开仓库，数据放在私有仓库。

| 文件夹 | 放进哪个仓库 | 可见性 | 内容 |
|---|---|---|---|
| `essay-map/` | `essay-map` | **Public**（GitHub Pages 免费版只能发布公开仓库） | 网页本身：`index.html`、`cloud.js`、`config.js`、`vendor/`（公式和 Markdown 的显示库）。**不含任何研究数据，也不含研究设计**（试用模式只带一张无关的小示例） |
| `essay-map-data/` | `essay-map-data` | **Private** | 地图数据：`data.json`（三栏卡片和连线，已经按立项书预置了一版）、`assets.json`（附件）。评论 `comments.json` 第一次有人评论时自动创建 |

`config.js` 里已经填好了 `owner: 'zgdddddd'`、`repo: 'essay-map-data'`。仓库名照下面的步骤起，就什么都不用改。

> 和「修改地图」放在同一个 `zgdddddd.github.io` 域名下也没关系：两个网站在浏览器里存钥匙和名字用的是不同的键名，互不影响。

---

## 一、建私有数据仓库 `essay-map-data`

1. GitHub 右上角 **+** → **New repository**。
2. Repository name 填 `essay-map-data`，选 **Private**，勾选 **Add a README file**，点 **Create repository**。
3. 在仓库页面点 **Add file → Upload files**，把 `essay-map-data/` 里的 `data.json` 和 `assets.json` 拖进去，点 **Commit changes**。

## 二、建网站仓库 `essay-map` 并发布

1. 再新建一个仓库，名字 `essay-map`，选 **Public**，勾选 Add a README，创建。
2. **Add file → Upload files**，把 `essay-map/` 文件夹**里面的全部内容**拖进去（`index.html`、`cloud.js`、`config.js`、`README.md` 和整个 `vendor` 文件夹），点 **Commit changes**。
   - 用 Chrome 或 Edge 拖文件夹最稳；`vendor` 里的子文件夹会一起上传。
   - `.nojekyll` 传不上去也没关系。
3. 仓库 **Settings → Pages**：Source 选 **Deploy from a branch**，Branch 选 **main**、文件夹 **/(root)**，点 **Save**。
4. 等 1–2 分钟，网址是：`https://zgdddddd.github.io/essay-map/`

命令行上传也可以：

```bash
cd essay-map
git init && git add . && git commit -m "研究地图"
git branch -M main
git remote add origin https://github.com/zgdddddd/essay-map.git
git push -u origin main
```

## 三、你自己连上（只做一次）

1. 生成一个**只能读写 `essay-map-data`** 的 token：GitHub 右上角头像 → **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**
   - Repository access 选 **Only select repositories → essay-map-data**
   - Permissions → Repository permissions → **Contents** 选 **Read and write**
   - 有效期按需要选。到期后重新生成一个，再发一次新链接
   - 点 **Generate token**，复制 `github_pat_` 开头的 token（只显示一次）
2. 打开网站，在弹出的框里展开「我是仓库拥有者：用 token 连接」，粘贴 token，点「连接并载入」，再填一个名字。

> 不要用「修改地图」那个 token：它只授权了 `data` 仓库，读不到 `essay-map-data`。

## 四、发给合作者

点左下角 **「分享链接」**，链接就复制好了，发给合作者即可。他们打开以后：

- 填一个名字，之后的修改和评论都署这个名字
- **直接点卡片就能编辑**，改动自动同步
- 点卡片标题旁的气泡、或左下角「评论」写评论，可以回复、标为已解决

链接里带着编辑钥匙，**只发给合作者**。想作废：在 GitHub 上删掉这个 token，重新生成一个，连上之后再发新链接。

---

## 使用

| 操作 | 怎么做 |
|---|---|
| 新建卡片 | 每一栏右上角的蓝色 **＋** |
| 编辑 | 点卡片，右侧打开编辑面板。名称、类别、状态、负责人直接改；描述、构造方法、分析方法、结果这些大段文字**点一下就进入编辑**，支持 Markdown 和 LaTeX 公式（`$\hat y_i$`、`$$...$$`） |
| 连线 | 鼠标移到卡片上，左右边缘会出现小圆点，按住拖到相邻一栏的卡片上。也可以在编辑面板底部「关联指标 / 关联分析」里勾选。点一下连线可以删除 |
| 附件 | 编辑面板里拖入文件，或者**直接把文件拖到卡片上**。PDF、图片、Word、CSV 可以在网页里直接预览。大文件放网盘，用「添加网页链接」 |
| 参考文献 | 「构造」卡片里有「参考文献」，每条一篇，可以附链接或 DOI，点 ↗ 直接打开 |
| 看链路 | 点一张卡片，和它相连的整条链路（指标 → 构造 → 分析）会高亮，其余变淡；点空白处或按 Esc 取消 |
| 搜索 | 右上角搜索框，匹配的卡片会标黄 |
| 导出 | 右上角「导出」：整张地图的 **Markdown 文档**（可以直接贴进论文草稿或发给老师），或 **JSON 备份** |
| 评论、修改记录 | 左下角「评论」打开面板，有「评论」和「修改记录」两页 |

**同步规则**和「修改地图」一样：

- 停止编辑 15 秒后自动同步，也可以点左下角「同步」，或按 Ctrl/⌘ + Shift + S。
- 每 20 秒检查一次合作者的修改。你正在输入时不会打断，离开输入框后再载入。
- 两个人同时改**同一张卡片的同一个字段**，后同步的人的版本会保留，并且会弹出提示。改不同卡片、或者同一张卡片的不同字段，两边都会保留。
- 每次同步都是 `essay-map-data` 里的一次 commit。想找回旧版本：打开 `data.json` → **History**。

## 先在本地看看（可选）

在网址后面加 `?demo` 就是试用模式：一张和课题无关的小示例（公开仓库里不放你们的研究设计），修改只存在当前浏览器里，不同步，也没有评论功能。

- 线上：`https://zgdddddd.github.io/essay-map/?demo`
- 本地：直接双击 `index.html` 打开，再在地址栏末尾加上 `?demo`

## 注意

- **隐私**：答题卡来自中学生，上传样例前请遮挡姓名、考号等信息。数据仓库必须是 Private。
- **附件大小**：附件都存在 `assets.json` 里，单个文件建议 10 MB 以内（超过 25 MB 网页会拒绝）。完整数据集不要传，放网盘再「添加网页链接」。
- **接口次数**：所有人用的是同一个 token，GitHub 对每个 token 每小时限 5,000 次请求。没有变化时的检查不计数，十个人同时在线也远用不完。
- **不是 Google Docs 式的逐字协作**：同一个字段在两次同步之间被两个人改，只保留一份。

## 文件说明（改代码时参考）

- `index.html`：页面和全部前端逻辑（三栏、连线、编辑面板、附件预览、导出）。卡片的字段定义在 `FIELDS`，指标类别在 `CATS`。
- `cloud.js`：GitHub 同步、三方合并、评论、修改记录、分享链接。改编自「修改地图」的 `cloud.js`。
- `config.js`：数据仓库位置和同步频率。
- `vendor/`：marked（Markdown）、DOMPurify（安全过滤）、KaTeX（公式）、mammoth（Word 预览）。放在仓库里，不依赖外部 CDN，国内也能正常显示。许可证见 `vendor/LICENSE-*`。
