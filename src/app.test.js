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

  test('POST - valid return value', async () => {
    const data = {
      input: 10
    }

    const res = await st(app)
                        .post('/')
                        .send(data)
                        .set('Accept', 'application/json')

    const actual = res.body
    const expected = {output: [3,5]}
    expect(actual).toStrictEqual(expected)
  })

  test('POST - valid return value #2', async () => {
    const data = {
      input: 18
    }

    const res = await st(app)
                        .post('/')
                        .send(data)
                        .set('Accept', 'application/json')

    const actual = res.body
    const expected = {output: [7]}
    expect(actual).toStrictEqual(expected)
  })
})

describe('404 catch all testing', () => {
  test('GET - 404 returned', async () => {
    const res = await st(app).get('/nonexistent/route')
    const actual = res.statusCode
    const expected = 404
    expect(actual).toStrictEqual(expected)
  })

  test('POST - 404 returned', async () => {
    const res = await st(app).post('/nonexistent/route')
    const actual = res.statusCode
    const expected = 404
    expect(actual).toStrictEqual(expected)
  })
})