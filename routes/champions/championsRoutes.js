const rescue = require('express-rescue');

const { router } = require('../../server');
const { championsList } = require('./imports');

router.get('/', rescue(championsList));

module.exports = router;
