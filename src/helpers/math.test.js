import { getPrimes, getSequence, getMedian, getResult } from './math'

describe('Working test env', () => {
  test('Valid - Control', () => {
    expect(true).toBeTruthy()
  })
})

describe("Generating correct sequences", () => {
   test("Valid - Testcase 1", () => {
     const actual = getSequence(5)
     const expected = [2,3,4,5]
   })

   test("Valid - Testcase 2", () => {
     const actual = getSequence(10)
     const expected = [2,3,4,5,6,7,8,9,10]
   })

   test("Valid - Testcase 3 - edge case", () => {
     const actual = getSequence(2)
     const expected = []
   })
   test("Valid - Testcase 4 - edge case", () => {
     const actual = getSequence(0)
     const expected = []
   })
})

describe('Prime number generation', () => {
  test('Valid - Testcase 1', () => {
    const actual = getPrimes(getSequence(10))
    const expected = [2,3,5,7]
    expect(actual).toStrictEqual(expected)
  })
  test('Valid - Testcase 2', () => {
    const actual = getPrimes(getSequence(18))
    const expected = [2,3,5,7,11,13,17]
    expect(actual).toStrictEqual(expected)
  })
  test('Valid - Testcase 3 - edge case', () => {
    const actual = getPrimes(getSequence(3))
    const expected = [2]
    expect(actual).toStrictEqual(expected)
  })
  test('Valid - Testcase 4 - edge case', () => {
    const actual = getPrimes(getSequence(2))
    const expected = []
    expect(actual).toStrictEqual(expected)
  })
  test('Valid - Testcase 5 - edge case', () => {
    const actual = getPrimes(getSequence(0))
    const expected = []
    expect(actual).toStrictEqual(expected)
  })
})


describe('Median calculation', () => {

  test('Valid - Testcase 1', () => {
    const actual = getMedian([0,1,2,3,4,5])
    const expected = [2,3]
    expect(actual).toStrictEqual(expected)
  })

  test('Valid - Testcase 2', () => {
    const actual = getMedian([0,1,2,3,4])
    const expected = [2]
    expect(actual).toStrictEqual(expected)
  })

  test('Valid - Testcase 3', () => {
    const actual = getMedian([0,1,2,3,4,5,6])
    const expected = [3]
    expect(actual).toStrictEqual(expected)
  })

  test('Valid - Testcase 4', () => {
    const actual = getMedian([1,2,3,4,5,6])
    const expected = [3,4]
    expect(actual).toStrictEqual(expected)
  })

  test('Valid - Testcase 4 - edge case', () => {
    const actual = getMedian([1])
    const expected = [1]
    expect(actual).toStrictEqual(expected)
  })

  test('Valid - Testcase 5 - edge case', () => {
    const actual = getMedian([0])
    const expected = [0]
    expect(actual).toStrictEqual(expected)
  })

  test('Valid - Testcase 6 - Edge case', () => {
    const v = []
    const actual = getMedian([])
    const expected = []
    expect(actual).toStrictEqual(expected)
  })
})

describe('Result calculation', () => {
  test('Valid - Testcase 1', () => {
    const actual = getResult(10)
    const expected = [3,5]
    expect(actual).toStrictEqual(expected)
  })

  test('Valid - Testcase 2', () => {
    const actual = getResult(18)
    const expected = [7]
    expect(actual).toStrictEqual(expected)
  })

  test('Valid - Testcase 3', () => {
    const actual = getResult(7)
    const expected = [3]
    expect(actual).toStrictEqual(expected)
  })

  test('Valid - Testcase 4 - Edge case', () => {
    const actual = getResult(0)
    const expected = []
    expect(actual).toStrictEqual(expected)
  })

  test('Valid - Testcase 5 - Edge case', () => {
    const actual = getResult([])
    const expected = []
    expect(actual).toStrictEqual(expected)
  })
})