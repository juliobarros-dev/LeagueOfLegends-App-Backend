const connection = require('../../connection/index');

const findChampionById = async (championKey, language) => {
  try {
    const db = await connection();
    const champion = await db.collection(`champions_${language}`).findOne({ key: championKey }, {
      projection: {
        _id: false,
        info: false,
        stats: false,
      },
    });

    return champion;
  } catch (err) {
    return null
  }
};

module.exports = {
  findChampionById,
};
