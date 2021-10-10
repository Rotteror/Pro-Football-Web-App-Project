const router = require('express').Router();
const { isAuth, isAdmin } = require('../middlewares/guards');
const { createMatches, getAllMatchDays, getMatchListByDate } = require('../services/matchDay');
const parserError = require('../utils/errorParser');



router.get('/all', async (req, res) => {
    const data = await getAllMatchDays();
    res.status(200).send(data);
})

router.post('/create', isAuth(), isAdmin(), async (req, res) => {
    const data = Object.values(req.body);
    const betsDay = data.shift();
    const finalArray = {};
    for (let index = 0; index < data.length; index += 2) {
        let key = `${data[index]} - ` + `${data[index + 1]}`
        let result = '0:0';
        let match = {};
        match[key] = result;
        Object.assign(finalArray, match)
    }

    try {
        const result = await createMatches(finalArray, betsDay);
        res.status(200).json(result);
    } catch (err) {
        const message = parserError(err);
        res.status(err.status).json({ message });
    }
})

router.post('/date', isAuth(), async (req, res) => {
    const date = req.body.date
    try {
        const data = await getMatchListByDate(date);
        res.status(200).json(data)
    } catch (err) {
        const message = parserError(err);
        res.status(err.status).json({ message });
    }
})









module.exports = router;