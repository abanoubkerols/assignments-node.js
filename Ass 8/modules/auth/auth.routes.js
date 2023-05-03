import { Router } from "express";
import   * as authModule from './controller/auth.controller.js'
import validation from './../../middleWare/validation.js'
import { signUpSchema } from "./auth.validation.js";


let routerForAuth = Router()

routerForAuth.post('/signUp',validation(signUpSchema),authModule.signUp)

routerForAuth.post("/signin",authModule.signIn);

routerForAuth.get("/refreshToken/:token", authModule.refreshToken)

routerForAuth.post('/sendCode',authModule.sendCode)

routerForAuth.post('/forgetPassword',authModule.forgetPassword)

routerForAuth.get("/confirmEmail/:token", authModule.confirmEmail);




export default routerForAuth