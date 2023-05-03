// import router from  Express
import { Router } from "express";

//import auth 
import { auth } from "./../../Middleware/auth.js"

//import api controllers
import  * as postcontrol from "./controller/post.control.js" 

const routerPost = Router()

// add post 
routerPost.post('/addpost',auth(), postcontrol.addPost)

// update post
routerPost.put('/updatePost/:id',auth(), postcontrol.updatePost)

// update post
routerPost.delete('/deletePost/:id',auth(), postcontrol.deletePost)

// return all posts with user details
routerPost.get('/allPosts',auth(), postcontrol.allPosts)

//posts with user details
routerPost.get('/userPost',auth(), postcontrol.userPost)
export default routerPost