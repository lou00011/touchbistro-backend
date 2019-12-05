const getSequence = (n:number) => {
  const [zero, one, ...rest] = [...Array(n).keys()]
  return rest
}

const getPrimes = (ns : number[]) => {
  const primes : number[] = []
  const limit : number = Math.sqrt(ns.length + 2)

  for (let counter = 2; counter <= limit; counter++){
      primes.push(ns[0])
      ns = ns.filter(v => v%counter !== 0)
  }
  return [...primes, ...ns]
}