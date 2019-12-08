import express from 'express'
import { getResult } from './helpers/math'
import { router } from './routes/index'

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use('/', router)
app.listen(port)

export {
  app
}
