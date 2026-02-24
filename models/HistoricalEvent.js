// 历史事件数据模型
const mongoose = require('mongoose');

const historicalEventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date
    },
    period: {
        type: String
    },
    location: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    significance: {
        type: String
    },
    participants: {
        type: Array,
        default: []
    },
    images: {
        type: Array,
        default: []
    },
    references: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const HistoricalEvent = mongoose.model('HistoricalEvent', historicalEventSchema);

module.exports = HistoricalEvent;
