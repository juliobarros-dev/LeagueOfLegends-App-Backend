const { findAllChampions } = require('../../models/champions/championsModel');

const championsList = async (_req, res) => {
  const champions = await findAllChampions();

  return res.status(200).json(champions);
};

module.exports = {
  championsList,
};
