require('dotenv/config');
const pg = require('pg');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

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
    where "caliber" = $1;
  `;
  const params = [caliber];
  db.query(sql, params)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
