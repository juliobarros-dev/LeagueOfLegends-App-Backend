const { router } = require('../../server');
const { championsList } = require('./imports');

const { findChampionsById } = require('../../models/champions/championsModel');

router.get('/', [championsList]);

router.post('/', async (req, res) => {
  const result = await findChampionsById(266);

  return res.status(201).json(result);
})

module.exports = router;
