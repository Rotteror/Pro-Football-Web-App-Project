const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../config');

async function register(username, email, password, fullName, address) {
    //check if user exist
    const existingByEmail = await User.findOne({ email });
    const users = await User.find({});

    if (existingByEmail) {
        const err = new Error('User already exist !');
        err.status = 409;
        throw err;
    }

    const existUsername = users.find(u => u.username.toLocaleLowerCase() === username.toLocaleLowerCase())
    if (existUsername) {
        const err = new Error('Username already taken !');
        err.status = 409;
        throw err;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        username,
        email,
        fullName,
        address,
        hashedPassword
    });

    await user.save();
    return {
        _id: user._id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        address: user.address,
        accessToken: createToken(user)
    };

};

async function login(email, password) {
    //check if user exist
    const user = await User.findOne({ email });
    if (!user) {
        const err = new Error('Incorrect email or password!');
        err.status = 401;
        throw err;
    }

    const match = await bcrypt.compare(password, user.hashedPassword);
    if (!match) {
        const err = new Error('Incorrect email or password!');
        err.status = 401;
        throw err;
    }

    if (user._id == '616e85aac44ed01982270d98') {
        user.role = 'Admin'
    } else {
        user.role = 'User'
    }

    return {
        _id: user._id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        address: user.address,
        role: user.role,
        accessToken: createToken(user)
    };

};


async function getUserById(id) {
    const result = await User.findById(id).populate('betPredictions').lean();
    result.betPredictions.sort((a,b)=> b.createdAt - a.createdAt); // return bet history in DESC order
    return result;
}

async function updateUserInfo(id, updated) {
    const original = await User.findById(id);
    Object.assign(original, updated);
    return original.save();
}


function createToken(user) {
    const token = jwt.sign({
        _id: user.id,
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        address: user.address,
        role: user.role,
    }, SECRET)

    return token;
}

// function readToken(req) {
//     const token = req.cookies[COOKIE_NAME];
//     if (token) {
//         try {
//             const userData = jwt.verify(data, TOKEN_SECRET);
//             req.user = userData;
//             res.locals.user = userData;
//         } catch (err) {
//             res.clearCookie(COOKIE_NAME);
//             res.redirect('/auth/login');
//             return false;
//         }
//         return true;
//     }
// }



module.exports = {
    register,
    login,
    getUserById,
    updateUserInfo
}