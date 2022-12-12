import express from 'express'
import cors from 'cors'
import db from './config/database.js'
import Router from './routes/routes.js'

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'Funciona' })
})

try {
  await db.authenticate();
  console.log("Connection has been established succesfully");
} catch (err) {
  console.log("Unable to connect to the database: ", err);
}

app.use(Router)

export default app