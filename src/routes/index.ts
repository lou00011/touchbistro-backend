import express from 'express'
import { getResult } from '../helpers/math'

const router = express.Router()


router.get('/', (req, res) => {
  res.send('HELLO WORLD')
})

router.post('/', (req, res) => {
  res.json({output: getResult(req.body.input)})
})

export { 
  router 
}

