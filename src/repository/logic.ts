import { Transaction, PointsResponse } from "../models";

const db: Array<Transaction> = []

export const addTransaction = (details: Transaction) => {
    try {
        db.push(details)
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