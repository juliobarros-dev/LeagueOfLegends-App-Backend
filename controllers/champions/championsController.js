const { getChampionsList } = require('../../service/champions/championsService');

const championsList = async (_req, res, next) => {
  try {
    const result = await getChampionsList();
    const { status, freeWeek, newPlayers } = result;
    
    return res.status(status).json({ freeWeek, newPlayers });
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  championsList,
};
