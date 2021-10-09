const router = require('express').Router();
const { isAuth, isAdmin } = require('../middlewares/guards');
const { createMatches } = require('../services/matchDay');
const parserError = require('../utils/errorParser');


router.post('/create', isAuth(), isAdmin(), async (req, res) => {
    console.log(req.body)
    const data = {
        matches: `${req.body['hostOne']}`
    }
    try {
        const result = await createMatches(data);
        res.status(200).json(result);
    } catch (err) {
        const message = parserError(err);
        res.status(err.status).json({ message });
    }
})






module.exports = router;