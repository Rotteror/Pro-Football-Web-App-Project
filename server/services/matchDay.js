const MatchDay = require('../models/MatchDay');
const Prediction = require('../models/Prediction');
const User = require('../models/User')


async function createMatches(data, betsDay) {
    const result = new MatchDay({ betsDay });
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

async function createPrediction(authorId, predictions, date) {
    const user = await User.findById(authorId).populate('betPredictions');
    const matchesForToday = await MatchDay.find({ betsDay: date });
   
    if (!user) {
        throw new Error('Please Log in')
    };

    const participantsArray = matchesForToday[0].participants;
    const userPresent = participantsArray.some(p => p._id == authorId);
    
    if (userPresent) {
        throw new Error('You already participate for this daily challange!')
    }
    
    const prediction = new Prediction();
    prediction.author = authorId;
    prediction.bets = predictions

    await prediction.save();

    user.betPredictions.push(prediction);
    matchesForToday[0].participants.push(user);
    await matchesForToday[0].save();
    await user.save();

}


module.exports = {
    createMatches,
    getAllMatchDays,
    getMatchListByDate,
    createPrediction,
}