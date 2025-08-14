import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import ragRoute from './Routes/ragistrationRoute.js'
import cors from "cors"
import payRoute from './Routes/paymentRoute.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use("/api", ragRoute)
app.use("/api", payRoute)
mongoose.connect(process.env.MONGOOBD_CONACTION).then(console.log("DB connected"))
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})