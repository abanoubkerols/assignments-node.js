import { Router } from "express";
import { auth } from "../../middleWare/auth.js";
import * as userModule from './Controller/user.controller.js'
import  validation from "../../middleware/validation.js";
import {updatePasswordSchema} from './user.validation.js'
import profile from "../../service/multer.js";

const routerForUser = Router()

routerForUser.patch('/upDatePassword',validation(updatePasswordSchema),auth(),userModule.changePassword)

routerForUser.delete('/daleteUser/:id',auth(),userModule.daleteUser)

routerForUser.get('/allUsers/:id',auth(),userModule.getUsers)

routerForUser.get('/specificNote/:id',auth(),userModule.specificNote)

routerForUser.get('/porfilePic',profile().single('image'),userModule.profilePic)

export default routerForUser