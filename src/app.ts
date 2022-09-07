import express from 'express';
import BodyParser from 'body-parser';
import { addTransaction, fetchPoints } from './repository/logic';

const app = express();
const port = 3000;

app.use(BodyParser.json())

app.post("/transaction", (req, res) => {
    const transaction = {
        payer: req.body.payer,
        points: req.body.points,
        timestamp: Date.now()
    };
    addTransaction(transaction) ? res.status(200).send("Success") : res.status(500).send("Error")
});

app.get("/points", (req, res) => {
  const response = fetchPoints()

  res.status(200).send(response)

});

app.listen(port, () => {
  console.log(`Rewards calculator service is running on port ${port}.`);
});