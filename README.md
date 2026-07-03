# 比特币白皮书 · 中英对照

<p align="center"><b>₿</b></p>

<p align="center">
  <a href="https://btc.fate.red"><b>在线阅读 → btc.fate.red</b></a>
</p>

一个用于阅读比特币创世文献的静态网站：将中本聪（Satoshi Nakamoto）2008 年发表的白皮书
《Bitcoin: A Peer-to-Peer Electronic Cash System》以**左英文原文、右简体中文译文**的
分栏形式逐段对照呈现，并将原文全部示意图重绘为中文版。

## 特性

- **逐段双语对照** — 摘要、正文 12 章、参考文献全文收录；每个英文段落与中文译文严格左右对齐，中缝分隔线悬停高亮当前对照段落
- **示意图汉化** — 白皮书全部 7 张示意图（交易链、时间戳服务器、工作量证明、Merkle 树、简化支付验证、交易输入输出、隐私模型）均基于原图重绘为中文版，与英文原图并排对照
- **公式原样复刻** — 赌徒破产问题的分段函数、泊松分布求和式等公式用纯 CSS 排版，C 语言参考代码与概率数据表横跨双栏居中展示
- **编辑级排版** — 暖纸墨色调、衬线双语字体、比特币橙点缀；创世区块哈希与《泰晤士报》头条彩蛋致敬历史
- **明暗双主题** — 跟随系统偏好，可手动切换并记忆选择
- **响应式** — 桌面端左右分栏；移动端上下堆叠，底部悬浮切换器支持「对照 / 仅英文 / 仅中文」三种阅读模式
- **零依赖** — 纯 HTML / CSS / 原生 JavaScript，无任何构建步骤与外部资源，克隆即用

## 本地运行

```bash
git clone git@github.com:riba2534/bitcoin.git
cd bitcoin
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 目录结构

```
.
├── index.html              # 单页全文（中英对照）
├── assets
│   ├── css/style.css       # 全部样式（明暗主题、双语排版、公式）
│   ├── js/main.js          # 主题切换 / 阅读进度 / 目录高亮 / 语言切换
│   └── figures
│       ├── en/             # 白皮书原版示意图（提取自原始 PDF）
│       └── zh/             # 中文重绘版示意图
└── .github/workflows       # 推送 main 分支自动部署到 Cloudflare Pages
```

## 部署

本仓库通过 GitHub Actions 自动部署：推送到 `main` 分支后，工作流会将站点发布到
Cloudflare Pages，并通过自定义域名 [btc.fate.red](https://btc.fate.red) 提供访问。

## 版权说明

- 白皮书原文由 Satoshi Nakamoto 发表于 [bitcoin.org](https://bitcoin.org/bitcoin.pdf)，基于 [MIT 许可证](https://bitcoin.org/en/posts/regarding-mit-public-license) 公开发布
- 简体中文译文与本站代码以 [MIT License](LICENSE) 开源
