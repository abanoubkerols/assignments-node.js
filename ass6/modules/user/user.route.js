import { Router } from "express";
import { allUsers ,adding,update,search,find,deleteuser} from "./controller/user.control.js";
const route=Router()

route.get("/",allUsers)
route.post("/add",adding)
route.put("/update",update)
route.delete("/deleteuser/:id",deleteuser)
route.get("/find/:id",find)
route.get("/search",search)

export default route
 