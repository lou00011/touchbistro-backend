
interface Input {
  input: number
}

interface Output {
  output: number[]
}

function parseInput(data: any) : Input{
  let d : Input

  try{
    d = {input: parseInt(data.input)}
  } catch (err){
    d = {} as Input
  }

  return d
}

function toOutput(ns : number[]){
  return <Output>{output: ns}
}

export {
  Input,
  Output,
  toOutput,
  parseInput
}