import { Router } from "express";
import { auth } from "../../middleware/auth.js";
import { HM,validationType} from "../../service/multer.js";
import  profile  from "./../../service/multer.js";
import * as userModule from './controller/user.control.js'

const routerForUser = Router()

routerForUser.patch('/upDatePassword',auth(),userModule.changePassword)

routerForUser.delete('/daleteUser/:id',auth(),userModule.daleteUser)

routerForUser.get('/allUsers/:id',auth(),userModule.getUsers)

routerForUser.get('/specificPost/:id',auth(),userModule.specificPost)

// routerForUser.get('/porfilePic',auth(),profile(validationType.image ).single('image'),HM, userModule.profilePhoto)

// routerForUser.get('/coverpic',auth(),profile(validationType.image ).array('image',3),HM, userModule.coverpic)



export default routerForUser