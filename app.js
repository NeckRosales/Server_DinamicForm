import express from 'express'
import { dbConnection } from './src/db.js'
import formRoutes from './src/routes/routes.js'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.get('/', (req, res) => {
  res.send('Puto')
})

app.use('/form', formRoutes)
dbConnection()
app.listen(3000, () => {
  console.log('server on port 3000')
})
