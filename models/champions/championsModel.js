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

const findChampionsById = async (championKey) => {
  try {
    const db = await connection();
    const champions = await db.collection('champions_pt-br').findOne({ key: championKey });
    return champions;
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
  findChampionsById,
};
