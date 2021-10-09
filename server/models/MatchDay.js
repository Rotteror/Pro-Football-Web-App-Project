const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const matchDaySchema = new mongoose.Schema({
    matches: { type: Array, required: true, default: []},
    createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('MatchDay', matchDaySchema);