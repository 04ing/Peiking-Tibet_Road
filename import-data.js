// 数据导入脚本
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// 导入模型
const AncientRoad = require('./models/AncientRoad');
const CulturalHeritage = require('./models/CulturalHeritage');

// 连接数据库
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('数据库连接成功');
        // 开始导入数据
        importRouteData();
        importCulturalHeritageData();
    })
    .catch((error) => {
        console.error('数据库连接失败:', error);
    });

// 导入古道数据
async function importRouteData() {
    try {
        // 读取route-data.json文件
        const routeDataPath = path.join(__dirname, 'json', 'route-data.json');
        const routeData = JSON.parse(fs.readFileSync(routeDataPath, 'utf8'));
        
        // 创建古道文档
        const ancientRoad = new AncientRoad({
            name: '京藏古道',
            description: '连接北京和西藏的古代贸易和文化交流通道',
            route: routeData.mainRoute,
            nodes: routeData.nodes,
            history: '京藏古道是中国古代连接中原地区与西藏的重要通道，历史悠久，文化底蕴深厚。',
            culture: '京藏古道不仅是一条交通要道，也是文化传播的桥梁，促进了中原与西藏之间的文化交流。',
            references: ['元代文献', '历史地图', '考古资料']
        });
        
        // 保存到数据库
        await ancientRoad.save();
        console.log('古道数据导入成功');
    } catch (error) {
        console.error('导入古道数据失败:', error);
    }
}

// 导入文化遗产数据
async function importCulturalHeritageData() {
    try {
        // 读取cultural-relics.json文件
        const culturalRelicsPath = path.join(__dirname, 'json', 'cultural-relics.json');
        const culturalRelics = JSON.parse(fs.readFileSync(culturalRelicsPath, 'utf8'));
        
        // 筛选与京藏古道相关的文化遗产（主要是沿线的）
        const relevantHeritages = culturalRelics.filter(relic => {
            // 筛选北京、河北、山西、内蒙古、宁夏、甘肃、青海、西藏等地的文化遗产
            const relevantProvinces = ['北京市', '河北省', '山西省', '内蒙古自治区', '宁夏回族自治区', '甘肃省', '青海省', '西藏自治区'];
            return relevantProvinces.includes(relic.province);
        });
        
        // 批量导入数据
        for (const relic of relevantHeritages) {
            const heritage = new CulturalHeritage({
                name: relic.name,
                type: relic.cultural_relic_type,
                location: {
                    name: `${relic.province}${relic.city ? relic.city : ''}${relic.county ? relic.county : ''}`,
                    coordinates: [relic.longitude, relic.latitude]
                },
                description: `${relic.name}位于${relic.province}${relic.city ? relic.city : ''}${relic.county ? relic.county : ''}，是${relic.era}时期的${relic.cultural_relic_type}，${relic.remarks ? relic.remarks : ''}`,
                history: `${relic.name}是${relic.era}时期的重要文化遗产，于${relic.batch}被列为文物保护单位。`,
                period: relic.era,
                significance: `${relic.name}具有重要的历史、艺术和科学价值，是研究${relic.era}时期社会、经济、文化的重要实物资料。`
            });
            
            await heritage.save();
        }
        
        console.log(`文化遗产数据导入成功，共导入${relevantHeritages.length}条记录`);
    } catch (error) {
        console.error('导入文化遗产数据失败:', error);
    }
}
