// 认证路由
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { isAuthenticated } = require('../middleware/auth');
require('dotenv').config();

// 用户注册
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        // 检查用户名是否已存在
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: '用户名或邮箱已存在' });
        }
        
        // 创建新用户
        const newUser = new User({ username, email, password });
        await newUser.save();
        
        // 生成JWT令牌
        const token = jwt.sign(
            { id: newUser._id, username: newUser.username, role: newUser.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );
        
        res.status(201).json({
            message: '注册成功',
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role
            },
            token
        });
    } catch (error) {
        console.error('注册错误:', error);
        res.status(500).json({ message: '注册失败，请稍后重试' });
    }
});

// 用户登录
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // 查找用户
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: '邮箱或密码错误' });
        }
        
        // 验证密码
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: '邮箱或密码错误' });
        }
        
        // 生成JWT令牌
        const token = jwt.sign(
            { id: user._id, username: user.username, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );
        
        res.status(200).json({
            message: '登录成功',
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            },
            token
        });
    } catch (error) {
        console.error('登录错误:', error);
        res.status(500).json({ message: '登录失败，请稍后重试' });
    }
});

// 获取当前用户信息
router.get('/me', isAuthenticated, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        res.status(200).json({ user });
    } catch (error) {
        console.error('获取用户信息错误:', error);
        res.status(500).json({ message: '获取用户信息失败' });
    }
});

// 更新用户信息
router.put('/update', isAuthenticated, async (req, res) => {
    try {
        const { username, preferences } = req.body;
        
        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            { username, preferences, updatedAt: Date.now() },
            { new: true }
        ).select('-password');
        
        res.status(200).json({
            message: '用户信息更新成功',
            user: updatedUser
        });
    } catch (error) {
        console.error('更新用户信息错误:', error);
        res.status(500).json({ message: '更新用户信息失败' });
    }
});

module.exports = router;
