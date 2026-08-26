# 浮动联系按钮系统 - 使用指南

## 功能概述

可配置的浮动联系按钮系统，支持 WhatsApp、Telegram、WeChat 等任何聊天平台。

## 后台管理

访问 `/admin/contact-buttons` 进入管理界面。

### 添加新按钮

1. **平台类型**: 如 WhatsApp、Telegram、WeChat
2. **图标 URL**: 
   - 建议尺寸: 64x64px PNG 格式
   - 建议使用透明背景
   - 可以使用外部图床或放在 `/public/images/icons/` 目录
3. **链接 URL**:
   - WhatsApp: `https://wa.me/8613800138000`
   - Telegram: `https://t.me/username`
   - WeChat: 链接到二维码图片或说明页
4. **显示文字** (可选): 鼠标悬停时显示的文字
5. **提示文字** (可选): aria-label 用于无障碍访问
6. **排序顺序**: 数字越小越靠前显示

### 管理现有按钮

- **启用/禁用**: 快速切换按钮显示状态
- **编辑**: 修改按钮配置
- **删除**: 永久删除按钮

## 前端显示规则

- 页面滚动超过 400px 后才显示
- 只显示"已启用"状态的按钮
- 按 `sortOrder` 从小到大排列
- 移动端自动调整位置避免遮挡底部 CTA

## 图标资源推荐

### 免费图标库
- [Wikimedia Commons](https://commons.wikimedia.org/) - WhatsApp、WeChat 等官方 Logo
- [Simple Icons](https://simpleicons.org/) - 2000+ 品牌 SVG 图标
- [IconScout](https://iconscout.com/free-icons) - 免费图标库

### 常用平台链接格式

```
WhatsApp:   https://wa.me/[国家码][手机号]
            例: https://wa.me/8613800138000

Telegram:   https://t.me/[username]
            例: https://t.me/florashanghai

WeChat:     创建二维码图片页面
            例: https://yoursite.com/wechat-qr.png

Line:       https://line.me/ti/p/[LINE ID]

Messenger:  https://m.me/[页面名称]

Email:      mailto:contact@example.com

Phone:      tel:+8613800138000
```

## 数据库表结构

```sql
CREATE TABLE floatingContactButtons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  platformType VARCHAR(40) NOT NULL,
  iconUrl VARCHAR(500) NOT NULL,
  linkUrl VARCHAR(500) NOT NULL,
  displayText VARCHAR(100),
  tooltipText VARCHAR(200),
  isActive INT NOT NULL DEFAULT 1,
  sortOrder INT NOT NULL DEFAULT 0,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## API 端点

通过 tRPC 提供以下接口:

- `floatingContactButtons.list` - 获取所有启用的按钮（前端使用）
- `floatingContactButtons.listAll` - 获取所有按钮（管理界面使用）
- `floatingContactButtons.create` - 创建新按钮
- `floatingContactButtons.update` - 更新按钮
- `floatingContactButtons.delete` - 删除按钮

## 安全注意事项

⚠️ **当前版本没有权限验证**，任何人都可以访问 `/admin/contact-buttons`。

生产环境部署前请添加：
1. 管理员登录验证
2. CSRF 保护
3. 输入验证和 XSS 防护
4. 速率限制

## 示例配置

### WhatsApp 按钮
```json
{
  "platformType": "WhatsApp",
  "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
  "linkUrl": "https://wa.me/8613800138000",
  "displayText": "Chat with us",
  "tooltipText": "Contact us on WhatsApp - 24h response",
  "sortOrder": 0
}
```

### WeChat 按钮
```json
{
  "platformType": "WeChat",
  "iconUrl": "/images/icons/wechat.svg",
  "linkUrl": "/wechat-qr",
  "displayText": "微信咨询",
  "tooltipText": "扫码添加微信客服",
  "sortOrder": 1
}
```

## 下一步优化建议

1. **图片上传功能**: 集成到后台，直接上传图标
2. **预设模板**: 提供常用平台的快速配置模板
3. **A/B 测试**: 跟踪每个按钮的点击率
4. **权限管理**: 添加管理员角色验证
5. **多语言支持**: 根据用户语言显示不同的 displayText
