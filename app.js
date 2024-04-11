import express from 'express'
import { dbConnection } from './src/db.js'
import formRoutes from './src/routes/routes.js'
import cors from 'cors'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Connected')
})

app.use('/form', formRoutes)
dbConnection()
app.listen(port, () => {
  console.log(`server on port ${port}`)
})
