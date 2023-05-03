import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()
app.use(express.json())

import * as indexRouter from "./index.routers.js";

import connect from './DB/connect.js'

const port = process.env.port

const baseUrl = process.env.baseUrl
app.use(`${baseUrl}/uploads` , express.static('./uploads'))
app.use(`${baseUrl}/auth`,indexRouter.routerAuth)
app.use(`${baseUrl}/user`,indexRouter.routerForUser)
app.use(`${baseUrl}/post`,indexRouter.routerForPost)

connect()

app.get('/' , (req,res)=>{ res.send('hello from browser')})
app.get('*',(req,res)=>{ res.send('in-valid api')})
app.listen(port , ()=>{
    console.log(`server works on port ${port}`);
})
 