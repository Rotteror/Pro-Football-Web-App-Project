const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const matchDaySchema = new mongoose.Schema({
    matches: { type: Object, required: true, default: {} },
    betsDay: { type: String, required: [true, 'Please enter Date for this Match List'] },
    createdAt: { type: Date, default: Date.now },
    participants: [{ type: ObjectId, ref: 'User', default: [] }]
})

module.exports = mongoose.model('MatchDay', matchDaySchema);