import { toOutput, Output, parseInput} from '../model/types'
import { getResult } from '../helpers/math'

function inputToOutput(inputObj : any) : Output{
  return toOutput(getResult((parseInput(inputObj)['input'])))
}

export {
  inputToOutput
}