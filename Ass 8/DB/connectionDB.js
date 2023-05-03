import mongoose from "mongoose";

const connect = async ()=>{
    return await mongoose.connect(process.env.DBURl)
    .then(() => console.log("DataBase work"  + process.env.DBURl))
    .catch((err) => console.log("Error " ,err ) )
}

export default connect