const MatchDay = require('../models/MatchDay');


async function createMatches(data, betsDay) {
    const result = new MatchDay({ betsDay });
    // result.matches.push(data);
    Object.assign(result.matches, data)
    await result.save();

    return result;
}

async function getAllMatchDays() {
    return await MatchDay.find({}).populate('matches').lean();
}

async function getMatchListByDate(date) {
    const matchList = await MatchDay.find({ betsDay: date }).populate('matches');
    return matchList[0];
}


module.exports = {
    createMatches,
    getAllMatchDays,
    getMatchListByDate
}