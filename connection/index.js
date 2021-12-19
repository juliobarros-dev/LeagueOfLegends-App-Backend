require('dotenv').config();
const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const MONGO_DB_URL = `mongodb+srv://${ DB_USER }:${ DB_PASSWORD }@cluster0.1vqfp.mongodb.net/${ DB_NAME }?retryWrites=true&w=majority`;

let db = null;

const connection = async () => {
  try {
    if (db) {
      Promise.resolve(db);
      return db;
    }
    const connect = await MongoClient.connect(MONGO_DB_URL, OPTIONS);
    db = connect.db(DB_NAME)
    return db;
  } catch (err) {
    console.log(err)
    process.exit();
  }
}

module.exports = connection;
