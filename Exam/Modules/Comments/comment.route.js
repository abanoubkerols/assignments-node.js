// import router from  Express
import { Router } from "express";

//import auth 
import { auth } from "./../../Middleware/auth.js"

//import api controllers
import  * as commentcontrol from "./controller/comment.control.js"

const routercomment = Router()

routercomment.post('/addcomment/:id',auth(),commentcontrol.addComment)

routercomment.delete('/deleteComment/:id',auth(),commentcontrol.deleteComment)

routercomment.delete('/updateComment/:id',auth(),commentcontrol.updateComment)
export default routercomment