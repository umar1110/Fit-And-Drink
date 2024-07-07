import express from "express";
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json({ extended: false, limit: '50mb' }))

app.use(express.urlencoded({extended:true,limit: "16kb"}))

import productRouter from "./routes/productRoute.js";
app.use("/api/v1",productRouter)



export default app;  