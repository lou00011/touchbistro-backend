import { app } from './app'
import st from 'supertest'

describe('/ gateway testing', () => {
  test('GET - Return 200', async () => {
    const res = await st(app).get('/')
    const actual = res.statusCode
    const expected = 200
    expect(actual).toStrictEqual(expected)
  })

  test('POST - Return 200', async () => {
    const data = {
      input: 10
    }

    const res = await st(app)
                        .post('/')
                        .send(data)
                        .set('Accept', 'application/json')

    const actual = res.statusCode
    const expected = 200
    expect(actual).toStrictEqual(expected)
  })

  test('POST - Return structure is correct', async () => {
    const data = {
      input: 10
    }

    const res = await st(app)
                        .post('/')
                        .send(data)
                        .set('Accept', 'application/json')

    const actual = res.body
    const expected = 'output'
    expect(actual).toHaveProperty(expected)
  })
  
})