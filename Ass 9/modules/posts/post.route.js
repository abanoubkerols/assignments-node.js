import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { HM,validationType} from "../../service/multer.js";
import  profile  from "./../../service/multer.js";
import * as postRouter from './controller/post.control.js'

const routerForPost = Router()

routerForPost.post('/addPost' ,auth(),profile(validationType.image).single('image'),HM ,postRouter.addPost) 

routerForPost.put("/updatePost/:id", auth(),profile(validationType.image).single('image'),HM , postRouter.updatePost)

routerForPost.delete('/deletePost/:id',auth(),postRouter.deletePost)

routerForPost.get('/allPots',auth(),postRouter.allPosts)

routerForPost.get('/specificPost/:id',auth(),postRouter.specificPost)

export default routerForPost