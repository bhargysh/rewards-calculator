import { Request, Response } from 'express-serve-static-core'
import { ParsedQs } from 'qs'
import { addTransaction } from './repository/logic'
import { convertToUnixTime } from './validation'

export const transactionRouteHandler = (req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) => {
    const unixTimestamp = convertToUnixTime(req.body.timestamp)
    if (unixTimestamp) {
      const transaction = {
        payer: req.body.payer,
        points: req.body.points,
        timestamp: unixTimestamp
      }
      
      addTransaction(transaction) ? res.status(200).send('Success') : res.status(500).send('Server Error')
    } else {
      res.status(400).send('Bad request, invalid timestamp')
    }
}