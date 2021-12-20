const { getChampionsList } = require('../../service/champions/championsService');

const championsList = async (_req, res, next) => {
  const result = await getChampionsList();

  if ('err' in result) return next(result);

  const { status, freeWeek, newPlayers } = result;

  return res.status(status).json({ freeWeek, newPlayers });
};

module.exports = {
  championsList,
};
