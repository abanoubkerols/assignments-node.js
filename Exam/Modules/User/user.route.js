// import router from  Express
import { Router } from "express";

//import auth 
import { auth } from "../../Middleware/auth.js";

//import api controllers
import  * as usercontrol from "./controller/user.control.js"

const routerUser = Router()

//registration for new user
routerUser.post('/signup',usercontrol.signUp)

// login for user
routerUser.post('/login',usercontrol.login)

//Change password for user
routerUser.put('/updatepass',auth(),usercontrol.update)

//update user 
routerUser.put('/updateAccount',auth(),usercontrol.updateAccount)

//delet user
routerUser.delete('/daleteUser/:id',auth(),usercontrol.daleteUser)

export default routerUser