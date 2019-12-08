interface Input {
  input: number
}

interface Output {
  output: number
}


function parseInput(json: string) {
  let parsed : Input

  try {
    parsed = <Input>JSON.parse(json)
  } catch (err) { 
    parsed = {} as Input
  }
  return parsed
}


function parseOutput(json: string) {
  let parsed : Output

  try {
    parsed = <Output>JSON.parse(json)
  } catch (err) { 
    parsed = {} as Output 
  }
  return parsed
}

