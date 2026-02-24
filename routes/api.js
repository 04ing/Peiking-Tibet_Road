// API路由
const express = require('express');
const router = express.Router();
const AncientRoad = require('../models/AncientRoad');
const CulturalHeritage = require('../models/CulturalHeritage');
const HistoricalEvent = require('../models/HistoricalEvent');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

// 古道相关API
router.get('/roads', async (req, res) => {
    try {
        const roads = await AncientRoad.find();
        res.status(200).json({ roads });
    } catch (error) {
        console.error('获取古道数据错误:', error);
        // 当数据库连接失败时，返回模拟数据
        const mockRoads = [
            {
                _id: '1',
                name: '京藏古道',
                description: '连接北京和西藏的古代贸易和文化交流通道',
                history: '京藏古道是中国古代连接中原地区与西藏的重要通道，历史悠久，文化底蕴深厚。',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ];
        res.status(200).json({ roads: mockRoads, message: '使用模拟数据' });
    }
});

router.get('/roads/:id', async (req, res) => {
    try {
        const road = await AncientRoad.findById(req.params.id);
        if (!road) {
            return res.status(404).json({ message: '古道数据不存在' });
        }
        res.status(200).json({ road });
    } catch (error) {
        console.error('获取古道详情错误:', error);
        // 当数据库连接失败时，返回模拟数据
        const mockRoad = {
            _id: req.params.id,
            name: '京藏古道',
            description: '连接北京和西藏的古代贸易和文化交流通道',
            history: '京藏古道是中国古代连接中原地区与西藏的重要通道，历史悠久，文化底蕴深厚。',
            createdAt: new Date(),
            updatedAt: new Date()
        };
        res.status(200).json({ road: mockRoad, message: '使用模拟数据' });
    }
});

router.post('/roads', isAuthenticated, isAdmin, async (req, res) => {
    try {
        const newRoad = new AncientRoad(req.body);
        await newRoad.save();
        res.status(201).json({ message: '古道数据创建成功', road: newRoad });
    } catch (error) {
        console.error('创建古道数据错误:', error);
        res.status(500).json({ message: '创建古道数据失败' });
    }
});

router.put('/roads/:id', isAuthenticated, isAdmin, async (req, res) => {
    try {
        const updatedRoad = await AncientRoad.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedAt: Date.now() },
            { new: true }
        );
        if (!updatedRoad) {
            return res.status(404).json({ message: '古道数据不存在' });
        }
        res.status(200).json({ message: '古道数据更新成功', road: updatedRoad });
    } catch (error) {
        console.error('更新古道数据错误:', error);
        res.status(500).json({ message: '更新古道数据失败' });
    }
});

router.delete('/roads/:id', isAuthenticated, isAdmin, async (req, res) => {
    try {
        const deletedRoad = await AncientRoad.findByIdAndDelete(req.params.id);
        if (!deletedRoad) {
            return res.status(404).json({ message: '古道数据不存在' });
        }
        res.status(200).json({ message: '古道数据删除成功' });
    } catch (error) {
        console.error('删除古道数据错误:', error);
        res.status(500).json({ message: '删除古道数据失败' });
    }
});

// 文化遗产相关API
router.get('/heritages', async (req, res) => {
    try {
        const heritages = await CulturalHeritage.find();
        res.status(200).json({ heritages });
    } catch (error) {
        console.error('获取文化遗产数据错误:', error);
        // 当数据库连接失败时，返回模拟数据
        const mockHeritages = [
            {
                _id: '1',
                name: '布达拉宫',
                type: '建筑',
                location: {
                    name: '西藏拉萨',
                    coordinates: [91.11, 29.65]
                },
                description: '布达拉宫是西藏最著名的建筑，也是世界文化遗产。',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ];
        res.status(200).json({ heritages: mockHeritages, message: '使用模拟数据' });
    }
});

router.get('/heritages/:id', async (req, res) => {
    try {
        const heritage = await CulturalHeritage.findById(req.params.id);
        if (!heritage) {
            return res.status(404).json({ message: '文化遗产数据不存在' });
        }
        res.status(200).json({ heritage });
    } catch (error) {
        console.error('获取文化遗产详情错误:', error);
        // 当数据库连接失败时，返回模拟数据
        const mockHeritage = {
            _id: req.params.id,
            name: '布达拉宫',
            type: '建筑',
            location: {
                name: '西藏拉萨',
                coordinates: [91.11, 29.65]
            },
            description: '布达拉宫是西藏最著名的建筑，也是世界文化遗产。',
            createdAt: new Date(),
            updatedAt: new Date()
        };
        res.status(200).json({ heritage: mockHeritage, message: '使用模拟数据' });
    }
});

router.post('/heritages', isAuthenticated, isAdmin, async (req, res) => {
    try {
        const newHeritage = new CulturalHeritage(req.body);
        await newHeritage.save();
        res.status(201).json({ message: '文化遗产数据创建成功', heritage: newHeritage });
    } catch (error) {
        console.error('创建文化遗产数据错误:', error);
        res.status(500).json({ message: '创建文化遗产数据失败' });
    }
});

router.put('/heritages/:id', isAuthenticated, isAdmin, async (req, res) => {
    try {
        const updatedHeritage = await CulturalHeritage.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedAt: Date.now() },
            { new: true }
        );
        if (!updatedHeritage) {
            return res.status(404).json({ message: '文化遗产数据不存在' });
        }
        res.status(200).json({ message: '文化遗产数据更新成功', heritage: updatedHeritage });
    } catch (error) {
        console.error('更新文化遗产数据错误:', error);
        res.status(500).json({ message: '更新文化遗产数据失败' });
    }
});

router.delete('/heritages/:id', isAuthenticated, isAdmin, async (req, res) => {
    try {
        const deletedHeritage = await CulturalHeritage.findByIdAndDelete(req.params.id);
        if (!deletedHeritage) {
            return res.status(404).json({ message: '文化遗产数据不存在' });
        }
        res.status(200).json({ message: '文化遗产数据删除成功' });
    } catch (error) {
        console.error('删除文化遗产数据错误:', error);
        res.status(500).json({ message: '删除文化遗产数据失败' });
    }
});

// 历史事件相关API
router.get('/events', async (req, res) => {
    try {
        const events = await HistoricalEvent.find();
        res.status(200).json({ events });
    } catch (error) {
        console.error('获取历史事件数据错误:', error);
        // 当数据库连接失败时，返回模拟数据
        const mockEvents = [
            {
                _id: '1',
                title: '文成公主入藏',
                period: '唐朝',
                location: '长安至拉萨',
                description: '文成公主入藏是唐朝与吐蕃之间的重要历史事件，促进了汉藏文化交流。',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ];
        res.status(200).json({ events: mockEvents, message: '使用模拟数据' });
    }
});

router.get('/events/:id', async (req, res) => {
    try {
        const event = await HistoricalEvent.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ message: '历史事件数据不存在' });
        }
        res.status(200).json({ event });
    } catch (error) {
        console.error('获取历史事件详情错误:', error);
        // 当数据库连接失败时，返回模拟数据
        const mockEvent = {
            _id: req.params.id,
            title: '文成公主入藏',
            period: '唐朝',
            location: '长安至拉萨',
            description: '文成公主入藏是唐朝与吐蕃之间的重要历史事件，促进了汉藏文化交流。',
            createdAt: new Date(),
            updatedAt: new Date()
        };
        res.status(200).json({ event: mockEvent, message: '使用模拟数据' });
    }
});

router.post('/events', isAuthenticated, isAdmin, async (req, res) => {
    try {
        const newEvent = new HistoricalEvent(req.body);
        await newEvent.save();
        res.status(201).json({ message: '历史事件数据创建成功', event: newEvent });
    } catch (error) {
        console.error('创建历史事件数据错误:', error);
        res.status(500).json({ message: '创建历史事件数据失败' });
    }
});

router.put('/events/:id', isAuthenticated, isAdmin, async (req, res) => {
    try {
        const updatedEvent = await HistoricalEvent.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedAt: Date.now() },
            { new: true }
        );
        if (!updatedEvent) {
            return res.status(404).json({ message: '历史事件数据不存在' });
        }
        res.status(200).json({ message: '历史事件数据更新成功', event: updatedEvent });
    } catch (error) {
        console.error('更新历史事件数据错误:', error);
        res.status(500).json({ message: '更新历史事件数据失败' });
    }
});

router.delete('/events/:id', isAuthenticated, isAdmin, async (req, res) => {
    try {
        const deletedEvent = await HistoricalEvent.findByIdAndDelete(req.params.id);
        if (!deletedEvent) {
            return res.status(404).json({ message: '历史事件数据不存在' });
        }
        res.status(200).json({ message: '历史事件数据删除成功' });
    } catch (error) {
        console.error('删除历史事件数据错误:', error);
        res.status(500).json({ message: '删除历史事件数据失败' });
    }
});

// 搜索API
router.get('/search', async (req, res) => {
    try {
        const { query } = req.query;
        
        // 搜索古道
        const roads = await AncientRoad.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } },
                { history: { $regex: query, $options: 'i' } }
            ]
        });
        
        // 搜索文化遗产
        const heritages = await CulturalHeritage.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } },
                { history: { $regex: query, $options: 'i' } }
            ]
        });
        
        // 搜索历史事件
        const events = await HistoricalEvent.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } },
                { location: { $regex: query, $options: 'i' } }
            ]
        });
        
        res.status(200).json({
            roads,
            heritages,
            events,
            total: roads.length + heritages.length + events.length
        });
    } catch (error) {
        console.error('搜索错误:', error);
        // 当数据库连接失败时，返回模拟数据
        const mockResults = {
            roads: [
                {
                    _id: '1',
                    name: '京藏古道',
                    description: '连接北京和西藏的古代贸易和文化交流通道',
                    history: '京藏古道是中国古代连接中原地区与西藏的重要通道，历史悠久，文化底蕴深厚。',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            heritages: [
                {
                    _id: '1',
                    name: '布达拉宫',
                    type: '建筑',
                    location: {
                        name: '西藏拉萨',
                        coordinates: [91.11, 29.65]
                    },
                    description: '布达拉宫是西藏最著名的建筑，也是世界文化遗产。',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            events: [
                {
                    _id: '1',
                    title: '文成公主入藏',
                    period: '唐朝',
                    location: '长安至拉萨',
                    description: '文成公主入藏是唐朝与吐蕃之间的重要历史事件，促进了汉藏文化交流。',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            total: 3,
            message: '使用模拟数据'
        };
        res.status(200).json(mockResults);
    }
});

module.exports = router;
