import express from 'express'
import { dbConnection } from './src/db.js'
import formRoutes from './src/routes/routes.js'
import cors from 'cors'
import morgan from 'morgan'

const app = express()
const port = process.env.PORT ?? 3000

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.get('/', (req, res) => {
  res.send('Connected')
})

app.use('/form', formRoutes)
dbConnection()
app.listen(port, () => {
  console.log(`server on port ${port}`)
})
