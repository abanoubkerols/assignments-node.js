import { Router } from "express";
import{addUser,updateUser,deleteUSer,getUser,getAllUsers,getAllUserAge,getAllUserName,getUsersLTAge,getUsersGTAge} from "./controller/user.control.js"
const userRouter=Router()

userRouter.post("/",addUser)

userRouter.put("/update/:id", updateUser)

userRouter.delete("/delete/:id", deleteUSer)

userRouter.get("/getUser/:id", getUser)

userRouter.get("/getAllUser", getAllUsers)

userRouter.get("/getAllUserAge", getAllUserAge)

userRouter.get("/getAllUserName", getAllUserName)

userRouter.get("/getUsersLTAge", getUsersLTAge)

userRouter.get("/getUsersGTAge", getUsersGTAge)

export default userRouter