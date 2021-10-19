const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const predictionSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    bets: { type: Object, default: {} },
    author: { type: ObjectId, ref: "User" },
})

module.exports = mongoose.model('Prediction', predictionSchema);