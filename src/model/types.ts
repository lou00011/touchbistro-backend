interface Input {
  input: number
}

interface Output {
  output: number[]
}


function parseInput(json: string) {
  let parsed : Input

  try {
    parsed = <Input>JSON.parse(json) 
  } catch (err) { 
    parsed = <Input>{}
  }
  return parsed
}


function toOutput(ns : number[]){
  return <Output>{output: ns}
}


export {
  Input,
  Output,
  parseInput,
  toOutput
}