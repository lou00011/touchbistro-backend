import express from 'express'
import { getResult } from './helpers/math'

const app = express()
const port = 8080

app.use(express.json())

app.get('/', (req, res) => {
  res.send('HELLO WORLD')
})

app.post('/', (req, res) => {
  res.json({output: getResult(req.body.input)})
})

app.listen(port)

export {
  app
}
