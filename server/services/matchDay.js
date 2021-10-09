const MatchDay = require('../models/MatchDay');


async function createMatches(data){
    const result = new MatchDay(data);
    await result.save();
    return result;
}


module.exports = {
    createMatches
}