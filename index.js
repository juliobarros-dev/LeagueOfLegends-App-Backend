const { json } = require('body-parser');
const cors = require('cors');

const { app } = require('./server');
const championsRouter = require('./routes/champions/championsRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

const PORT = process.env.PORT || 3001;

app.use(cors())

app.use(json());

app.use('/', championsRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listen to PORT ${PORT}`))
