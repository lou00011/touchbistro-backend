import express from 'express'
import  compression from 'compression'
import  helmet  from 'helmet'
//
import { router } from './routes/index'

const app = express()
const port = process.env.PORT || 8080

//middleware init
app.use(compression())
app.use(helmet())
app.use(express.json())

//routes
app.use('/', router)

// 404 catchall
app.use((req, res) => {
  res.sendStatus(404)
})

app.listen(port)

export {
  app
}
