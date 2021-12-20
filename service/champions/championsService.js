require('dotenv').config();
const axios = require('axios').default;
const { StatusCodes } = require('http-status-codes');

const { API_KEY, RIOT_API_URL } = process.env;
const { AppError } = require('../../middlewares/appError')

const FREE_WEEK_API_URL = `${ RIOT_API_URL }${ API_KEY }`;

const { findChampionById } = require('../../models/champions/championsModel')

const getWeeklyRotation = async () => {
  try {
    const { data } = await axios.get(FREE_WEEK_API_URL);
    return data
  } catch (err) {
    throw new AppError({
      status: StatusCodes.NOT_FOUND,
      message: 'Riot API token expired.'
    })
  }
};

const getFreeWeekChampions = async (idsArray) => {
  const champions_pt_br = await Promise.all(
    idsArray.map((id) => findChampionById(id.toString(), 'pt-br')),
  );

  const champions_en_us = await Promise.all(
    idsArray.map((id) => findChampionById(id.toString(), 'en-us')),
  );

  if (!champions_pt_br && !champions_en_us) return null;

  return {
    champions_pt_br,
    champions_en_us,
  };
};

const getNewPlayersChampions = async (idsArray) => {
  const champions_pt_br = await Promise.all(
    idsArray.map((id) => findChampionById(id.toString(), 'pt-br')),
  );

  const champions_en_us = await Promise.all(
    idsArray.map((id) => findChampionById(id.toString(), 'en-us')),
  );

  if (!champions_pt_br && !champions_en_us) return null;

  return {
    champions_pt_br,
    champions_en_us,
  };
};

const getChampionsList = async () => {
  const { freeChampionIds, freeChampionIdsForNewPlayers } = await getWeeklyRotation();
  
  if (!freeChampionIds && !freeChampionIdsForNewPlayers) {
    throw new AppError({
      status: StatusCodes.NOT_FOUND,
      message: 'Champions not found.'
    });
  }

  const freeWeek = await getFreeWeekChampions(freeChampionIds);
  const newPlayers = await getNewPlayersChampions(freeChampionIdsForNewPlayers);

  if (!freeWeek && !newPlayers) {
    throw new AppError({
      status: StatusCodes.NOT_FOUND,
      message: 'Champions not found.'
    });
  }

  return {
    status: StatusCodes.OK,
    freeWeek,
    newPlayers,
  };
};

module.exports = {
  getChampionsList,
};
