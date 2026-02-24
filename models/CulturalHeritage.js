// 文化遗产数据模型
const mongoose = require('mongoose');

const culturalHeritageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true
    },
    location: {
        type: Object,
        required: true,
        properties: {
            name: String,
            coordinates: [Number]
        }
    },
    description: {
        type: String,
        required: true
    },
    history: {
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
    period: {
        type: String
    },
    significance: {
        type: String
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

const CulturalHeritage = mongoose.model('CulturalHeritage', culturalHeritageSchema);

module.exports = CulturalHeritage;
