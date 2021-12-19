const connection = require('../../connection/index');

const findAllChampions = async () => {
  try {
    const db = await connection();
    const champions = await db.collection('champions').find().toArray();
    return champions;
  } catch (err) {
    return err.message
  }
};

module.exports = {
  findAllChampions,
};
