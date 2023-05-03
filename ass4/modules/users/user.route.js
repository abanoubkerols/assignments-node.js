import { Router } from "express";

import {
    adduser,updateuser,deleteuser,getuser,
    allusers,getUserAge,startWithChar
    ,smallerAge,greaterAge,signin
} from "./controller/user.control.js";

const routerUser=Router();

// 1_ add user 
routerUser.post('/adduser',adduser)

//2_ update user by id 
routerUser.put('/updateuser/:id',updateuser)

//3 delete user by id
routerUser.delete('/deleteuser/:id',deleteuser)

// 4_get user by id
routerUser.get('/getuser/:id',getuser)

// 5_get all users list
routerUser.get('/allusers',allusers)

// 6_ get all user by age between  x any y for example 20,26
routerUser.get('/getUserAge',getUserAge)

// 7_get all user by name start with x for example  mahm
routerUser.get('/startWithChar',startWithChar)
// 8_ get users age less than x for example  25
routerUser.get('/smallerAge',smallerAge)

// 9_get all users age greater than x for example  30
routerUser.get('/greaterAge',greaterAge)


// signin
routerUser.post('/signin',signin)



export default routerUser