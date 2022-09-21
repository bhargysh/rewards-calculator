import { addTransaction, db } from '../src/repository/logic'

describe('addTransaction', () => {
    it('should save new transaction in order of timestamp', () => {
        const t1 = {
            'payer': 'test1',
            'points': 2000,
            'timestamp': 1663768800, // 2022-09-21T14:00:00Z
        }
        const t2 = {
            ...t1,
            'timestamp': 1663747200, // 2022-09-21T08:00:00Z
        }
        const t3 = {
            ...t1,
            'timestamp': 1663660800, //2022-09-20T08:00:00Z
        }
        const t4 = {
            ...t1,
            'timestamp': 1663700400, //2022-09-20T19:00:00Z
        }
        addTransaction(t1)
        addTransaction(t2)
        addTransaction(t3)
        addTransaction(t4)

        expect(db).toEqual([t3, t4, t2, t1])
    })
})