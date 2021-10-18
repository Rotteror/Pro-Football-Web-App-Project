const MatchDay = require('../models/MatchDay');
const Prediction = require('../models/Prediction');
const User = require('../models/User')


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

async function createPrediction(authorId, predictions) {
    const user = await User.findById(authorId);
    if (!user) {
        throw new Error('Please Log in')
    };

    const prediction = new Prediction();
    prediction.author = authorId;
    prediction.predictions = predictions
    console.log(prediction)
    await prediction.save();

    user.predictions.push(prediction);
    await user.save();
}


module.exports = {
    createMatches,
    getAllMatchDays,
    getMatchListByDate,
    createPrediction,
}