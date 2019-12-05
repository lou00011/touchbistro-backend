import { array } from "prop-types"

const getSequence = (n:number) => {
  // exception guards
  if (n<0) return []

  const [zero, one, ...rest] = [...Array(n).keys()]
  return rest
}

const getPrimes = (ns : number[]) => {
  const primes : number[] = []

  // Do not need to check past limit because every number past it is guaranteed to be a prime #
  const limit : number = Math.ceil(Math.sqrt(ns.length + 2))

  for (let counter = ns[0]; counter <= limit; counter++){
      primes.push(ns[0])
      ns = ns.filter(v => v%ns[0]!== 0)
  }
  return [...primes, ...ns]
}

const getMedian = (ns: number[]) => {
  const len = ns.length
  if (len > 0){
    if (len % 2 === 0){
      return [ns[len/2-1], ns[len/2]]
    }
    else {
      return [ns[Math.floor(len/2)]]
    }
  }
  return []
}

const getResult = (n: number) => getMedian(getPrimes(getSequence(n))) 

export {
  getSequence,
  getPrimes,
  getMedian,
  getResult,
}