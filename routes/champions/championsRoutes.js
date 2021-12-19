const { router } = require('../../server');
const { championsList } = require('./imports');

router.get('/', [championsList]);

module.exports = router;
