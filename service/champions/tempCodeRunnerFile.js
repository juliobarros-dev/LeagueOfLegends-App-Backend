require('dotenv').config();
const axios = require('axios').default;
const { StatusCodes } = require('http-status-codes');

const { API_KEY } = process.env;
const RIOT_API_URL = 'https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=';
const FREE_WEEK_API_URL = `${ RIOT_API_URL }${ API_KEY }`;

const { findChampionById } = require('../../models/champions/championsModel')

const getWeeklyRotation = async () => {
  try {
    const { data } = await axios.get(FREE_WEEK_API_URL);
    return data
  } catch (err) {
    console.log(err.message);
    return {
      err,
    }
  }
};

const getFreeWeekChampions = async (idsArray) => {
  const champions_pt_br = await Promise.all(
    idsArray.map((id) => findChampionById(id.toString(), 'pt-br')),
  );
  console.log(champions_pt_br);
};

const getChampionsList = async () => {
  const { freeChampionIds, freeChampionIdsForNewPlayers } = await getWeeklyRotation();
  return await getFreeWeekChampions(freeChampionIds);
};

getChampionsList();