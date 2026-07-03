<div align="center">

<img src="assets/logo.svg" width="150" alt="比特币白皮书 · 中英对照">

# 比特币白皮书 · 中英对照

**Bitcoin: A Peer-to-Peer Electronic Cash System — 双语对照阅读网站**

[![在线阅读](https://img.shields.io/badge/%E5%9C%A8%E7%BA%BF%E9%98%85%E8%AF%BB-btc.fate.red-f7931a?style=flat-square&logo=bitcoin&logoColor=white)](https://btc.fate.red)
[![License: MIT](https://img.shields.io/badge/License-MIT-b45309?style=flat-square)](LICENSE)

<a href="https://btc.fate.red"><b>btc.fate.red</b></a> · 左栏英文原文 · 右栏简体中文 · 示意图全部汉化

</div>

---

2008 年 10 月 31 日，中本聪（Satoshi Nakamoto）在密码学邮件列表发表了九页论文
《Bitcoin: A Peer-to-Peer Electronic Cash System》，为其后的整个加密货币世界奠定了基石。

本网站把这份创世文献做成了**逐段中英对照**的阅读体验：页面从中缝一分为二，左侧是未作任何改动的英文原文，右侧是与之严格对齐的简体中文译文；原文中的 7 张示意图全部基于原图重绘为中文版，与英文原图并排呈现。你可以在一屏之内同时读到两种语言的同一段论述，随时互相印证。

## 预览

<div align="center">

**首页 —— 创世文献风格的编辑级排版**

<img src="assets/screenshots/hero-light.png" width="830" alt="首页">

**逐段对照 + 示意图汉化（左原图 · 右中文版）**

<img src="assets/screenshots/figures-bilingual.png" width="830" alt="双语对照与示意图">

**暗色主题下的公式排版**

<img src="assets/screenshots/math-dark.png" width="830" alt="暗色主题公式">

</div>

## 网站内容

- **逐段双语对照** — 摘要、正文 12 章、参考文献全文收录；每个英文段落与中文译文左右对齐，中缝分隔线悬停时高亮当前对照段落，逐段比对毫不费力
- **示意图全部汉化** — 交易链、时间戳服务器、工作量证明、Merkle 树、简化支付验证、交易输入输出、隐私模型共 7 张示意图，均重绘为中文版，布局、线条、箭头与原图一一对应
- **公式、代码与数据完整收录** — 赌徒破产问题的分段函数、泊松分布求和式等全部公式，C 语言参考代码与攻击成功概率数据表原样呈现，跨栏居中展示
- **创世彩蛋** — 首页嵌有创世区块哈希，页脚藏着创世区块中的《泰晤士报》头条
- **明暗双主题** — 默认跟随系统偏好，可一键切换并记忆选择
- **全端适配** — 桌面端左右分栏，配阅读进度条与章节目录；移动端自动上下堆叠，底部悬浮切换器支持「对照 / 仅英文 / 仅中文」三种阅读模式
- **可离线阅读** — 下载仓库后直接打开 `index.html` 即可完整阅读，无需联网、无需安装任何东西

## 白皮书目录

| # | 原文 | 译文 |
|---|------|------|
| — | Abstract | 摘要 |
| 1 | Introduction | 引言 |
| 2 | Transactions | 交易 |
| 3 | Timestamp Server | 时间戳服务器 |
| 4 | Proof-of-Work | 工作量证明 |
| 5 | Network | 网络 |
| 6 | Incentive | 激励 |
| 7 | Reclaiming Disk Space | 回收磁盘空间 |
| 8 | Simplified Payment Verification | 简化支付验证 |
| 9 | Combining and Splitting Value | 价值的合并与分割 |
| 10 | Privacy | 隐私 |
| 11 | Calculations | 计算 |
| 12 | Conclusion | 结论 |
| — | References | 参考文献 |

## 本地阅读

```bash
git clone git@github.com:riba2534/bitcoin.git
cd bitcoin
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

或者直接双击 `index.html`。

## 版权说明

- 白皮书英文原文由 Satoshi Nakamoto 发表于 [bitcoin.org](https://bitcoin.org/bitcoin.pdf)，基于 [MIT 许可证](https://bitcoin.org/en/posts/regarding-mit-public-license)公开发布
- 简体中文译文、中文版示意图与本站以 [MIT License](LICENSE) 开源，欢迎自由使用与转载

<div align="center">

*“The Times 03/Jan/2009 Chancellor on brink of second bailout for banks.”*

</div>
