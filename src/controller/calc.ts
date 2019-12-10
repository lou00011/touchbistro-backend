import { Input, toOutput, Output} from '../model/types'
import { getResult } from '../helpers/math'

function inputToOutput(inputObj : Input) : Output{
  return toOutput(getResult((inputObj)['input']))
}

export {
  inputToOutput
}