export interface Transaction {
    payer: string,
    points: number,
    timestamp: number
}

export type PointsResponse = Omit<Transaction, "timestamp">