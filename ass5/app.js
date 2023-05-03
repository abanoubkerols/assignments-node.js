import  express  from "express";
import userRouter from "./modules/user/user.route.js";
import productRouter from "./modules/product/product.route.js";
import { userMmodel } from "./DB/models/user.model.js";
import { productMmodel } from "./DB/models/product.model.js";
import {create}from './DB/connect.js'

const app=express()

app.use(express.json())

const port = 5000

app.use('/user',userRouter)
app.use('/product',productRouter)
create()

userMmodel.hasMany(productMmodel,{
onDelete:"CASCADE",
onUpdate:"CASCADE"
})

productMmodel.belongsTo(userMmodel)

app.listen(port,()=>{
console.log("server run on port " + port)
})