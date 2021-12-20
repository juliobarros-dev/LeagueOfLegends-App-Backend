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
    console.log(champion);
    return champion;
  } catch (err) {
    return err.message
  }
};

const insertChampions = async (championsArray, coll) => {
  try {
    const db = await connection();
    const inserted = await db.collection(coll).insertMany(championsArray);
    console.log(inserted);
    return inserted;
  } catch (err) {
    return err.message
  }
};

module.exports = {
  findAllChampions,
  insertChampions,
  findChampionById,
};
