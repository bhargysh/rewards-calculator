import express from 'express';
import BodyParser from 'body-parser';
import { fetchPoints } from './repository/logic';
import { transactionRouteHandler } from './handlers';

const env = process.env['ENV']
export const app = express();
const port = 3000;

app.use(BodyParser.json())

app.post('/transaction', (req, res) => transactionRouteHandler(req, res));

app.get('/points', (req, res) => {
  const response = fetchPoints()

  res.status(200).send(response)

});

if (env && env == 'main') {
  app.listen(port, () => {
    console.log(`Rewards calculator service is running on port ${port}.`);
  });
}
