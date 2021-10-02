const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;


const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    hashedPassword: { type: String, required: true },
})


module.exports = mongoose.model('User', userSchema);