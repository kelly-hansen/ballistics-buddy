require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const app = express();

app.use(staticMiddleware);

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.get('/api/ballistics-data', (req, res, next) => {
  const caliber = req.headers.caliber;
  if (!caliber) {
    throw new ClientError(400, 'caliber is a required field');
  }
  const sql = `
    select "distance", "bulletDrop"
    from "ballisticsData"
    join "calibers" using ("caliberId")
    where "caliberId" = $1;
  `;
  const params = [caliber];
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
