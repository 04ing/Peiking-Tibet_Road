// 古道数据模型
const mongoose = require('mongoose');

const ancientRoadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    route: {
        type: Array,
        default: []
    },
    nodes: {
        type: Array,
        default: []
    },
    history: {
        type: String
    },
    culture: {
        type: String
    },
    images: {
        type: Array,
        default: []
    },
    videos: {
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

const AncientRoad = mongoose.model('AncientRoad', ancientRoadSchema);

module.exports = AncientRoad;
