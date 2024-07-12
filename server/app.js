import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express()

app.use(cors())
app.use(cookieParser(
    {
        origin: 'http://localhost:3001',
        credentials: true 
    }
))

app.use(express.json({ extended: false, limit: '50mb' }))

app.use(express.urlencoded({extended:true,limit: "16kb"}))

import productRouter from "./routes/productRoute.js";
import messageRouter from "./routes/messageRoute.js";
import adminRouter from "./routes/AdminRoutes.js";


app.use("/api/v1",productRouter)
app.use("/api/v1",messageRouter)
app.use("/api/v1",adminRouter)





export default app;  