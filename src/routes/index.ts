import express from 'express'
import {inputToOutput} from '../controller/calc'

const router = express.Router()


router.get('/', (req, res) => {
  res.sendStatus(200)
})

router.post('/', (req, res) => {
  res.json(inputToOutput(req.body))
})

export { 
  router 
}

