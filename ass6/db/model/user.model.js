import mongoose from "mongoose";

let userSchema= new mongoose.Schema({
    userName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    phone:{
      type:String

    },
    how:{
      type:String

    }
  
    },{
        new:true
    })

    
    let userModel=mongoose.model('user',userSchema)
      


export default userModel