const router = require('express').Router();
const { authCookieName } = require('../config');
const { register, login, getUserById } = require('../services/user');

router.post('/register', async (req, res) => {

    const username = req.body.username;
    const fullName = req.body.fullName;
    const address = req.body.address;
    const email = req.body.email;
    const password = req.body.password;
    
    try {
        if (!email.trim()) {
            throw new Error('Email is required');
        }
        if (password.trim().length < 6) {
            throw new Error('Password must be at least 6 characters long');
        }
        if (!fullName.trim()) {
            throw new Error('Full Name is required');
        }
        if (!address.trim()) {
            throw new Error('Address is required');
        }

        const userData = await register(username, email.toLocaleLowerCase(), password.trim(), fullName, address);
        res.cookie(authCookieName, userData.accessToken, { httpOnly: true })
        res.json(userData)
    } catch (err) {
        res.status(err.status || 400).json({ message: err.message });
    }
})

router.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const userData = await login(email, password);
        res.cookie(authCookieName, userData.accessToken, { httpOnly: true })
        res.json(userData)
    } catch (err) {
        res.status(err.status || 400).json({ message: err.message });
    }
})

router.get('/logout', async (req, res) => {
    res.clearCookie(authCookieName).status(204).send({ message: 'Logget Out' });
})

router.get('/profile/:id', async (req, res) => {
    const id = req.params.id;
  
    try{
        const user = await getUserById(id);
        res.status(200).json(user);
    }catch(err){
        res.status(409).json({message: err.message})
    }
})

module.exports = router;