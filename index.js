const { json } = require('body-parser');

const { app } = require('./server');
const championsRouter = require('./routes/champions/championsRoutes');

const PORT = process.env.PORT || 3001;

app.use(json());

app.get('/', championsRouter);

app.listen(PORT, () => console.log(`Listen to PORT ${PORT}`))
