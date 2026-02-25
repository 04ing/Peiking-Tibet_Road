# 京藏古道人文环境时空信息开放平台 - 项目文档

## 1. 项目概述

京藏古道人文环境时空信息开放平台是一个专注于元代北京至西藏驿路历史文化的综合性网站。该平台旨在通过数字化技术，展示京藏古道的历史沿革、文化内涵、线性文化遗产分布等内容，为研究人员、文化爱好者和旅游从业者提供丰富的历史文化资源。

### 1.1 项目目标

- **数字化保护**：通过数字技术记录和保护京藏古道的历史文化遗产
- **学术研究**：为学者提供系统化的历史资料和研究工具
- **文化传播**：向公众传播京藏古道的历史文化价值
- **旅游开发**：基于历史文化资源，为沿线地区的旅游发展提供支持

### 1.2 核心价值

- **历史价值**：重现元代北京至西藏驿路的历史面貌
- **文化价值**：展示多民族文化交流融合的历史轨迹
- **学术价值**：为相关研究提供数据支持和可视化工具
- **社会价值**：促进文化遗产保护和区域文化旅游发展

## 2. 技术架构

### 2.1 前端架构

- **HTML5**：页面结构
- **CSS3**：样式设计，采用模块化CSS结构
- **JavaScript**：交互逻辑
- **Leaflet.js**：地图可视化
- **D3.js**：数据可视化
- **Vis.js**：时间轴可视化
- **Font Awesome**：图标库

### 2.2 后端架构

- **Node.js**：运行环境
- **Express.js**：Web框架
- **JWT**：用户认证
- **内存存储**：临时存储用户信息

### 2.3 项目依赖

| 依赖项 | 版本 | 用途 |
|--------|------|------|
| express | ^4.18.2 | Web框架 |
| jsonwebtoken | ^9.0.0 | JWT认证 |
| dotenv | ^17.3.1 | 环境变量管理 |
| mongoose | ^6.8.4 | MongoDB ODM（预留） |
| bcrypt | ^5.1.0 | 密码加密（预留） |
| cors | ^2.8.5 | 跨域请求处理 |

## 3. 项目结构

### 3.1 目录结构

```
├── index.html              # 首页
├── pages/                  # 页面文件夹
│   ├── route.html          # 古道路线页面
│   ├── culture.html        # 文化内涵页面
│   ├── travel.html         # 旅游攻略页面
│   ├── heritage.html       # 线性文化遗产页面
│   ├── events.html         # 历史事件页面
│   ├── yuan-dynasty-map.html # 元代地图页面
│   ├── artifacts_map.html  # 文物分布地图页面
│   ├── dataset-archaeology.html # 考古遗址数据集页面
│   ├── dataset-history.html # 历史文献数据集页面
│   ├── dataset-images.html # 图像数据集页面
│   ├── dataset-geography.html # 地理数据集页面
│   └── pdf-viewer.html     # PDF 查看器页面
├── source/                 # 资源文件夹
│   ├── *.pdf               # PDF 文件
│   └── *.mp4               # MP4 文件
├── css/                    # 样式文件
│   ├── style.css           # 主样式文件
│   ├── base.css            # 基础样式
│   ├── navbar.css          # 导航栏样式
│   ├── hero.css            # 英雄区域样式
│   ├── intro.css           # 介绍区域样式
│   ├── explore.css         # 探索区域样式
│   ├── map.css             # 地图区域样式
│   ├── dataset.css         # 数据集样式
│   ├── culture.css         # 文化内涵样式
│   ├── travel.css          # 旅游攻略页面样式
│   ├── travel-new.css      # 新旅游攻略样式
│   ├── heritage.css        # 线性文化遗产页面样式
│   ├── timeline.css        # 时间轴样式
│   ├── pdf-viewer.css      # PDF 查看器样式
│   ├── animation.css       # 动画效果样式
│   ├── video.css           # 视频样式
│   └── responsive.css      # 响应式设计样式
├── js/                     # JavaScript 文件
│   ├── main.js             # 主脚本文件
│   └── template-loader.js  # 模板加载脚本
├── templates/              # 模板文件
│   └── navbar.html         # 导航栏模板
├── routes/                 # 后端路由
│   └── auth.js             # 认证路由
├── models/                 # 数据模型
│   └── User.js             # 用户模型
├── json/                   # JSON 数据文件
│   ├── route-data.json     # 路线数据
│   ├── cultural-relics.json # 文化遗产数据
│   └── Inheritors.geojson  # 传承人数据
├── img/                    # 图片文件
│   ├── 古墓.png            # 古墓葬图标
│   └── *.jpg               # 其他图片
├── server.js               # 后端服务器文件
├── package.json            # 项目配置文件
├── .env                    # 环境变量文件
├── .gitignore              # Git 忽略文件
├── README.md               # 项目说明文件
└── PROJECT_DOCUMENTATION.md # 项目文档
```

### 3.2 核心文件说明

| 文件 | 功能 | 位置 |
|------|------|------|
| index.html | 首页 | 根目录 |
| server.js | 后端服务器 | 根目录 |
| routes/auth.js | 认证路由 | routes/ |
| js/main.js | 前端主逻辑 | js/ |
| js/template-loader.js | 模板加载 | js/ |
| css/style.css | 主样式文件 | css/ |
| templates/navbar.html | 导航栏模板 | templates/ |

## 4. 功能模块

### 4.1 导航模块

- **导航栏**：顶部导航菜单，包含所有主要页面链接
- **搜索功能**：支持网站内容搜索
- **用户认证**：登录/注册功能

### 4.2 首页模块

- **英雄区域**：展示项目主题和核心价值
- **项目介绍**：简要介绍平台功能和目标
- **古道探索**：古道路线和历史沿革
- **地图展示**：元代京藏古道路线图
- **数据集**：考古遗址、历史文献等数据
- **文化内涵**：古道沿线的宗教、艺术、建筑等文化元素
- **线性文化遗产**：遗产识别与分类
- **旅游攻略**：基于古道的旅游路线和景点推荐
- **历史事件**：重要历史事件时间轴
- **关于平台**：平台建设目标和团队介绍

### 4.3 古道路线模块

- **路线复原**：元代京藏古道路线详细地图
- **站点介绍**：重要节点和站点信息
- **历史沿革**：古道的形成、发展和演变

### 4.4 地图展示模块

- **元代地图**：元代京藏古道路线复原图
- **文化遗产分布**：古道沿线文化遗产分布
- **古墓葬分布**：古墓葬分布地图

### 4.5 数据集模块

- **考古遗址数据**：考古遗址信息和图片
- **历史文献数据**：历史文献资料
- **文化遗产数据**：文化遗产详细信息
- **地理数据**：地理空间数据
- **图像数据**：历史图像资料

### 4.6 线性文化遗产模块

- **遗产识别**：线性文化遗产的识别方法
- **遗产分类**：不同类型的文化遗产
- **价值评估**：遗产价值的评估体系
- **保护策略**：遗产保护的策略和方法

### 4.7 历史事件模块

- **时间轴**：交互式历史事件时间轴
- **事件详情**：重要历史事件的详细信息
- **事件关联**：事件之间的关联分析

### 4.8 旅游攻略模块

- **旅游路线**：基于古道的旅游路线
- **景点推荐**：沿线重要景点介绍
- **交通指南**：交通方式和路线
- **住宿建议**：沿线住宿推荐

### 4.9 用户认证模块

- **注册功能**：新用户注册
- **登录功能**：用户登录
- **JWT认证**：基于令牌的认证机制

## 5. API接口

### 5.1 认证接口

| 接口 | 方法 | 功能 | 请求体 | 响应 |
|------|------|------|--------|------|
| /api/auth/register | POST | 用户注册 | {username, email, password} | {message, user, token} |
| /api/auth/login | POST | 用户登录 | {email, password} | {message, user, token} |

### 5.2 响应格式

#### 成功响应

```json
{
  "message": "注册成功",
  "user": {
    "id": "user-1234567890",
    "username": "testuser",
    "email": "test@example.com",
    "role": "user"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### 错误响应

```json
{
  "message": "邮箱已存在"
}
```

## 6. 数据结构

### 6.1 用户数据

```json
{
  "id": "user-1234567890",
  "username": "testuser",
  "email": "test@example.com",
  "password": "password123",
  "role": "user"
}
```

### 6.2 路线数据

```json
{
  "id": "road-001",
  "name": "京藏古道主线",
  "startPoint": "北京",
  "endPoint": "拉萨",
  "length": "约4000公里",
  "history": "元代北京至西藏的官方驿路",
  "sites": [
    {
      "id": "site-001",
      "name": "大都（北京）",
      "location": "北京市",
      "description": "元代首都，京藏古道起点"
    }
  ]
}
```

### 6.3 文化遗产数据

```json
{
  "id": "heritage-001",
  "name": "居庸关",
  "type": "关隘",
  "location": "北京市昌平区",
  "era": "元代",
  "description": "京藏古道出京的第一重要关口",
  "value": "历史价值、军事价值、建筑价值"
}
```

## 7. 部署指南

### 7.1 本地部署

#### 方法一：使用 Node.js 后端服务

1. 克隆项目
   ```bash
   git clone https://github.com/04ing/Peking-Tibet_Road.git
   cd Peking-Tibet_Road
   ```

2. 安装依赖
   ```bash
   npm install
   ```

3. 启动服务
   ```bash
   node server.js
   ```

4. 访问
   ```
   http://localhost:3000
   ```

#### 方法二：使用 HTTP 服务器

1. 克隆项目
   ```bash
   git clone https://github.com/04ing/Peking-Tibet_Road.git
   cd Peking-Tibet_Road
   ```

2. 启动服务器
   ```bash
   # 使用 Python 3
   python -m http.server 8000
   
   # 或使用 Python 2
   python -m SimpleHTTPServer 8000
   ```

3. 访问
   ```
   http://localhost:8000
   ```

### 7.2 生产部署

1. 准备生产环境
   - 安装 Node.js
   - 配置环境变量

2. 部署步骤
   ```bash
   # 克隆项目
   git clone https://github.com/04ing/Peking-Tibet_Road.git
   cd Peking-Tibet_Road
   
   # 安装依赖
   npm install
   
   # 启动服务（使用 PM2）
   npm install -g pm2
   pm2 start server.js --name "peking-tibet-road"
   ```

3. 配置域名和HTTPS
   - 配置 Nginx 反向代理
   - 配置 SSL 证书

## 8. 开发指南

### 8.1 开发环境设置

1. 克隆项目
   ```bash
   git clone https://github.com/04ing/Peking-Tibet_Road.git
   cd Peking-Tibet_Road
   ```

2. 安装依赖
   ```bash
   npm install
   ```

3. 启动开发服务器
   ```bash
   node server.js
   ```

### 8.2 代码规范

- **HTML**：使用语义化标签，缩进2空格
- **CSS**：使用小写字母和连字符命名类，缩进2空格
- **JavaScript**：使用驼峰命名法，缩进2空格，使用单引号

### 8.3 提交规范

```
<类型>: <描述>

<详细说明>（可选）

<引用相关 Issue>（可选）
```

**类型**：feat（新功能）、fix（修复）、docs（文档）、style（样式）、refactor（重构）、test（测试）、chore（构建）

## 9. 未来规划

### 9.1 功能扩展

- **数据库集成**：使用 MongoDB 存储数据
- **用户系统**：完善用户认证和权限管理
- **API 扩展**：增加更多数据接口
- **数据可视化**：增强数据可视化效果
- **移动端适配**：优化移动端体验

### 9.2 技术升级

- **前端框架**：考虑使用 React 或 Vue.js
- **状态管理**：使用 Redux 或 Vuex
- **构建工具**：使用 Webpack 或 Vite
- **后端优化**：使用 TypeScript
- **部署优化**：使用 Docker 容器化

### 9.3 内容扩展

- **更多历史数据**：增加更多历史文献和考古资料
- **多语言支持**：添加英文等多语言版本
- **虚拟漫游**：3D 虚拟漫游古道沿线景点
- **互动地图**：增强地图交互功能
- **学术研究**：提供更多研究工具和资料

## 10. 联系方式

- **项目地址**：https://github.com/04ing/Peking-Tibet_Road
- **邮箱**：contact@jzgd-platform.org
- **电话**：XXX-XXXXXXXX

---

**版权信息**：© 2026 京藏古道人文环境时空信息开放平台

本项目仅供学术研究和文化传播使用，未经授权不得用于商业目的。