import { Transaction, PointsResponse } from '../models';

export const db: Array<Transaction> = []

export const addTransaction = (details: Transaction) => {
    try {
        if (db.length == 0) {
            db.push(details)
        }
        else {
            db.push(details)
            db.sort((t1, t2) => t1.timestamp - t2.timestamp) //TODO: move this sort into spending route
        }
        return true
    } catch (error) {
        console.error(`Could not add transaction due to error: ${error}`);
        return false
    }
}
// TODO: only return total points per payer, atm this returns each separate point transaction
export const fetchPoints = () => {
    const toResponse = (transaction: Transaction) => {
        return {
            payer: transaction.payer,
            points: transaction.points
        }
    }
    return db.map(toResponse)
}