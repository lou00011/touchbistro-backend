
interface Input {
  input: number
}

interface Output {
  output: number[]
}

function toOutput(ns : number[]){
  return <Output>{output: ns}
}

export {
  Input,
  Output,
  toOutput
}