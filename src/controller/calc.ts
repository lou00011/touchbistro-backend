import { parseInput, toOutput, Output} from '../model/types'
import { getResult } from '../helpers/math'

function inputToOutput(json : string) : Output{
  return toOutput(getResult(parseInput(json)['input']))
}

export {
  inputToOutput
}