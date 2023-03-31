import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import chatResponse from './routes/chatRoute.js'
import grammerResponse from './routes/syntacticalRoute.js'
import dalleResponse from "./routes/DalleRoute.js"
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/api/chat", chatResponse)
app.use("/api/spell", grammerResponse)
app.use("/api/media", dalleResponse)
app.get("/", async(req,res)=>{
    res.status(200).json({
        message: 200,
    })
})
app.listen(3000, ()=>{
    console.log(`Server Running at ${3000}`)
})