const MatchDay = require('../models/MatchDay');


async function createMatches(data){
    const result = new MatchDay();
    result.matches.push(data);
    await result.save();
    return result;
}

async function getAllMatchDays(){
    return await MatchDay.find({}).populate('matches').lean();
}


module.exports = {
    createMatches,
    getAllMatchDays
}