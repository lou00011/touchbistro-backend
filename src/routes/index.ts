import express from 'express'
import {inputToOutput} from '../controller/calc'
import { json } from 'body-parser'

const router = express.Router()


router.get('/', (req, res) => {
  res.sendStatus(200)
})

router.post('/', (req, res) => {
  res.send(JSON.stringify(inputToOutput(req.body)))
})

export { 
  router 
}

