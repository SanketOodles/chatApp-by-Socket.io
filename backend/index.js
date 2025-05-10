import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
import ConnectDB from './db/Conn.js'
import userRoute from './routes/authRoutes.js'
import messageRoute from './routes/messageRoute.js'
import { app, server } from './socket/server.js'
const port = process.env.PORT || 9000

app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/auth',userRoute);
app.use('/message',messageRoute);

const start=()=>{
    try {
        ConnectDB(process.env.MONGO_URL)
        server.listen(port, () => {
            console.log(`app listening on port ${port}`)
          })
    } catch (error) {
        console.log('Error starting the server:', error)
    }
}
start()
