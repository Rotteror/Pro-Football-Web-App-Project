const MatchDay = require('../models/MatchDay');


async function createMatches(data, betsDay) {
    const result = new MatchDay({ betsDay });
    result.matches.push(data);
    await result.save();
    return result;
}

async function getAllMatchDays() {
    return await MatchDay.find({}).populate('matches').lean();
}

async function getMatchListByDate(date) {
    const matchList = await MatchDay.find({ betsDay: date });
    return matchList;
}


module.exports = {
    createMatches,
    getAllMatchDays,
    getMatchListByDate
}