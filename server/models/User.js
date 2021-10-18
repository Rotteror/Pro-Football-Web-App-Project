const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;


const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    betPredictions: [{ type: ObjectId, ref: "Prediction", default: [] }],
    hashedPassword: { type: String, required: true },
})


module.exports = mongoose.model('User', userSchema);