const { getChampionsList } = require('../../service/champions/championsService');

const championsList = async (_req, res) => {
  const champion = await getChampionsList();

  return res.status(200).json(champion);
};

module.exports = {
  championsList,
};
