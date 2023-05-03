import { Router } from "express";
import * as authModule from './controller/auth.control.js'
import validation from './../../middleWare/validation.js'
import * as valid from "./auth.validation.js";

const routerAuth = Router()

routerAuth.post('/signup',validation(valid.signUpSchema),authModule.signUp)

routerAuth.post("/signin",validation(valid.signin) ,authModule.signIn);

routerAuth.get("/refreshToken/:token",authModule.refreshToken);

routerAuth.post('/sendCode',authModule.sendCode)

routerAuth.post('/forgetPassword',authModule.forgetPassword)

routerAuth.get('/confirmEmail/:token',validation(valid.confirmEmail) ,authModule.confirmEmail)


export default routerAuth