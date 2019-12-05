import { getPrimes } from './math'

describe('Working Test env', () => {
  test('Valid - Control', () => {
    expect(true).toBeTruthy()
  })
})

describe('Prime number generation', () => {
  test('Valid - Testcase 1', () => {
    const actual = getPrimes(10)
    const expected = [2,3,5,7]
    expect(actual).toStrictEqual(expected)
  })
  test('Valid - Testcase 2', () => {
    const actual = getPrimes(18)
    const expected = [2,3,5,7,11,13,17]
    expect(actual).toStrictEqual(expected)
  })
})