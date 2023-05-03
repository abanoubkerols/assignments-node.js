 // import DOTENV
import dotenv from 'dotenv'
dotenv.config()

// import Express
import express from "express"

// import all routers of project 
import * as indexRouter from './index.router.js'

// connect DB
import connectDB from './DB/connection.js'

const app = express()

const port = process.env.port

// middleware
app.use(express.json())

const baseUrl = '/api/v1'
app.use(`${baseUrl}/user`, indexRouter.routerUser)
app.use(`${baseUrl}/post`, indexRouter.routerPost)
app.use(`${baseUrl}/comment`, indexRouter.routercomment)

connectDB()

app.listen(port, () => 
{console.log(' App run on port ' +  port)})
