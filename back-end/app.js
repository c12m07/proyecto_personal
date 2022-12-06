import express from 'express'
import cors from 'cors'
import Router from './routes/routes.js'

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'Funciona' })
})

app.use(Router)

export default app