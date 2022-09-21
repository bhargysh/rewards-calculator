import request from 'supertest'
import { app } from '../src/app'

describe('/transaction', () => {
    it('should return 200 status on success', async () => {
        const res = await request(app)
        .post('/transaction')
        .send({
            payer: 'test1',
            points: 2000,
            timestamp: '2022-09-21T10:00:00Z'
        })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toEqual('Success')
    })
})