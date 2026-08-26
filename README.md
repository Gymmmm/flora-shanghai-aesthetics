# Flora Shanghai Aesthetics

> Still You. *Just Refined.*

高端国际医美患者服务平台 - 上海整形美容咨询与就医指导系统

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/flora-shanghai-aesthetics)

## ✨ 项目特色

### 🎯 核心功能
- **医生目录与验证体系** - 可验证的医生资质、学术背景、专业认证展示
- **患者旅程规划** - 从初次咨询到术后随访的 7 步完整流程，含详细服务清单
- **术式教育内容** - 结构化的手术方式介绍，帮助患者做知情决策
- **私密咨询系统** - 表单提交、归因追踪、CRM 集成（可选）
- **案例展示系统** - 带同意管理的 Before/After 案例库
- **浮动联系按钮** - 可后台配置的多平台联系方式（WhatsApp/WeChat/Telegram）

### 🌐 国际化支持
- 多语言内容支持（当前：英文）
- 24/7 多语言客服承诺展示
- 适配国际患者的旅程规划

### 🔒 合规与安全
- 医疗免责声明框架
- 隐私政策与数据处理通知
- 患者媒体同意管理
- 敏感数据上传禁用（需配置后启用）

### 🚀 技术亮点
- **React + TypeScript** - 类型安全的前端开发
- **tRPC** - 端到端类型安全的 API
- **Drizzle ORM** - 类型安全的数据库操作
- **Vercel 一键部署** - 生产级 CI/CD
- **响应式设计** - 移动端优先的用户体验

## 🛠️ 技术栈

### 前端
- React 18
- TypeScript
- Wouter (轻量级路由)
- Lucide Icons
- CSS Modules

### 后端
- Node.js + Express
- tRPC (类型安全 API)
- Drizzle ORM (MySQL)
- Zod (数据验证)

### 部署
- Vercel (推荐)
- 或任何支持 Node.js 的平台

## 🚀 快速开始

### 1. 克隆仓库
```bash
git clone https://github.com/yourusername/flora-shanghai-aesthetics.git
cd flora-shanghai-aesthetics
```

### 2. 安装依赖
```bash
npm install
```

### 3. 配置环境变量
```bash
cp .env.example .env
```

编辑 `.env` 文件，配置必要的变量：

```bash
# 服务器配置
PORT=3000
NODE_ENV=development

# 数据库（可选，不配置则使用本地模式）
DATABASE_URL=mysql://user:password@localhost:3306/flora

# 网站元信息
PUBLIC_SITE_URL=http://localhost:3000

# 联系方式（显示在前端）
VITE_CONTACT_EMAIL=contact@yoursite.com
VITE_CONTACT_WHATSAPP=https://wa.me/8613800138000

# 分析追踪（可选）
VITE_GA4_ID=
VITE_META_PIXEL_ID=
VITE_TIKTOK_PIXEL_ID=
```

### 4. 运行数据库迁移（如果使用数据库）
```bash
mysql -u [user] -p [database] < drizzle/migrations/add_floating_contact_buttons.sql
```

### 5. 启动开发服务器
```bash
npm run dev
```

访问 http://localhost:3000

### 6. 构建生产版本
```bash
npm run build
npm start
```

## 📦 部署到 Vercel

### 方法 1: 一键部署
点击上方的 "Deploy with Vercel" 按钮

### 方法 2: CLI 部署
```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel

# 配置环境变量
vercel env add DATABASE_URL
vercel env add VITE_CONTACT_EMAIL
vercel env add VITE_CONTACT_WHATSAPP

# 生产部署
vercel --prod
```

### Vercel 环境变量配置

在 Vercel 项目设置 → Environment Variables 中添加：

| 变量名 | 说明 | 必需 |
|--------|------|------|
| `DATABASE_URL` | MySQL 连接字符串 | 可选 |
| `VITE_CONTACT_EMAIL` | 联系邮箱 | 推荐 |
| `VITE_CONTACT_WHATSAPP` | WhatsApp 链接 | 推荐 |
| `PUBLIC_SITE_URL` | 网站 URL | 推荐 |
| `VITE_GA4_ID` | Google Analytics ID | 可选 |

## 🗂️ 项目结构

```
flora-shanghai-aesthetics/
├── client/                 # 前端代码
│   ├── src/
│   │   ├── components/    # React 组件
│   │   ├── data/          # 静态数据（医生、术式、旅程）
│   │   ├── lib/           # 工具函数
│   │   ├── App.tsx        # 主应用组件
│   │   └── index.css      # 全局样式
│   └── public/            # 静态资源
├── server/                # 后端代码
│   ├── routers/           # tRPC 路由
│   ├── _core/             # 核心服务
│   └── db.ts              # 数据库操作
├── shared/                # 前后端共享代码
├── drizzle/               # 数据库 Schema 与迁移
│   ├── schema.ts          # Drizzle ORM Schema
│   └── migrations/        # SQL 迁移文件
├── docs/                  # 项目文档
└── vercel.json            # Vercel 部署配置
```

## 📚 关键功能文档

### 浮动联系按钮系统
详见: [docs/FLOATING_CONTACT_BUTTONS.md](docs/FLOATING_CONTACT_BUTTONS.md)

- 后台管理界面: `/admin/contact-buttons`
- 支持任意聊天平台（WhatsApp/WeChat/Telegram/Line 等）
- 可上传自定义图标，配置链接和文案
- 动态显示/隐藏，带精致悬停动效

### 医生资质验证
- 数据结构支持：学位、专业认证、发表论文数量
- 验证状态：verified / hospital_reported / pending_verification / do_not_publish
- 验证来源可追溯（来源名称、URL、日期、备注）

### 患者旅程
7 步完整流程，每步包含：
1. 初次咨询 - 24/7 多语言支持
2. 医生匹配 - 资质验证与推荐
3. 虚拟咨询 - 视频面诊与报价
4. 旅行规划 - 签证、接机、翻译
5. 到院评估 - 术前检查与最终确认
6. 手术与恢复 - 术后监护与酒店支持
7. 长期随访 - 远程复查与本地协作

## 🔐 安全注意事项

### ⚠️ 生产部署前必须完成

1. **管理后台权限保护**
   - 当前 `/admin/contact-buttons` 无权限验证
   - 部署前添加管理员登录系统

2. **数据库安全**
   - 使用强密码
   - 启用 SSL 连接
   - 定期备份

3. **环境变量**
   - 永远不要提交 `.env` 文件到 Git
   - 使用 Vercel Environment Variables 管理生产密钥

4. **HTTPS**
   - Vercel 自动提供 HTTPS
   - 自托管需配置 SSL 证书

5. **CORS 与 CSRF**
   - 生产环境配置正确的 CORS 域名
   - 添加 CSRF 保护

## 📊 数据模型

### 核心表
- `users` - 用户账户
- `leads` - 咨询线索
- `consultationSubmissions` - 咨询提交记录
- `patientUploads` - 患者上传文件（禁用直到安全配置）
- `floatingContactButtons` - 浮动联系按钮配置

### 数据文件（client/src/data/）
- `doctors.ts` - 医生信息
- `procedures.ts` - 术式内容
- `journeys.ts` - 患者旅程
- `cases.ts` - 案例展示
- `landingPages.ts` - 营销落地页

## 🎨 设计系统

### 品牌色
- Bronze: `#B5946E` (主色调，优雅金色)
- Paper: `#F4F0E9` (背景米白)
- Foreground: `#2A2421` (深棕黑文字)

### 字体
- 标题: Inter (衬线风格)
- 正文: Inter (无衬线风格)
- 中文: 系统默认（支持回退）

### 设计理念
- 极简主义，留白充足
- 精致动效，提升品质感
- 响应式设计，移动端优先

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发流程
1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 代码规范
- TypeScript 严格模式
- ESLint + Prettier
- 提交信息遵循 Conventional Commits

## 📝 Roadmap

### 近期计划
- [ ] 管理后台登录系统
- [ ] 多语言切换（中文/英文/阿拉伯语）
- [ ] 在线聊天集成（Intercom/Crisp）
- [ ] 视频咨询预约系统
- [ ] 案例库内容管理后台

### 远期计划
- [ ] 小程序版本（微信/支付宝）
- [ ] 患者自助查询术后恢复进度
- [ ] AI 智能咨询助手
- [ ] 多医院版本（白标解决方案）

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 📞 联系方式

- 项目问题: [GitHub Issues](https://github.com/yourusername/flora-shanghai-aesthetics/issues)
- 商务合作: contact@yoursite.com

---

<p align="center">Made with ❤️ for International Medical Aesthetics in Shanghai</p>
