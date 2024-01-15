import * as dotenv from 'dotenv'
dotenv.config({path:'./config.env'})
import express from 'express'
import cors from 'cors'
import dbConnect from './db/config.js'
import router from './routes/routes.js'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import productRoutes from './routes/productApiRoutes.js'
// import crypto from 'crypto'
const app = express()
const PORT = process.env.PORT_NUMBER || 3002;
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.json())
dbConnect()

const corsOptions = { // cors options
  origin: "http://localhost:3000", // frontend URI (ReactJS)
  credentials: true,
}
app.use(cors(corsOptions))


// const buf = crypto.randomBytes(64).toString('hex')
// console.log(buf)

app.use('/user', router)
app.use('/api', productRoutes )


app.listen(PORT, () => {
  console.log('Server is Running on Port ' + PORT)
})





