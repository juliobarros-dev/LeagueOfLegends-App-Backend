const express = require('express');

const app = express();
const router = express.Router({ mergeParams: true })

module.exports = {
  app,
  router,
}
