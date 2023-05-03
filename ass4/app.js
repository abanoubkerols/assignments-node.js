import express from "express";
const server =express()
server.use(express.json())
import cors from 'cors'
server.use(cors())
import routerUser from "./modules/users/user.route.js"
import routerProduct from "./modules/product/product.router.js"

server.use(routerUser)
server.use(routerProduct  )

// server.get("*",(req,res)=>{
//     res.json({message:"404 no found"})
// })

server.listen(4000,()=>{
    console.log("is working...");
})



