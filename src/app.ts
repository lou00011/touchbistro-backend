import express from 'express'
import { router } from './routes/index'

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use('/', router)

// 404 catchall
app.use((req, res) => {
  res.sendStatus(404)
})

app.listen(port)

export {
  app
}
