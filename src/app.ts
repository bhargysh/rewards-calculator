import express from 'express';
import BodyParser from 'body-parser';
import { addTransaction, fetchPoints } from './repository/logic';
import { convertToUnixTime } from './validation';

const app = express();
const port = 3000;

app.use(BodyParser.json())

app.post("/transaction", (req, res) => {
  const unixTimestamp = convertToUnixTime(req.body.timestamp)
  if (unixTimestamp) {
    const transaction = {
      payer: req.body.payer,
      points: req.body.points,
      timestamp: unixTimestamp
    }
    addTransaction(transaction) ? res.status(200).send("Success") : res.status(500).send("Server Error")
  } else {
    res.status(400).send("Bad request, invalid timestamp")
  }
});

app.get("/points", (req, res) => {
  const response = fetchPoints()

  res.status(200).send(response)

});

app.listen(port, () => {
  console.log(`Rewards calculator service is running on port ${port}.`);
});