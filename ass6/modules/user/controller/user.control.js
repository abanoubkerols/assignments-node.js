import userModel from "../../../db/model/user.model.js";


// 1-GetAllUser

export const allUsers = async (req, res) => {
    const alluser = await userModel.find({});
    res.json({ message: "find them ", alluser });
}

// 2-AddUser

export const adding = async (req, res) => {
    let { userName, email, password,phone } = req.body
    const adduser = await userModel.find({ email })
    if (adduser.length) {
        res.json({ message: "email is exist" })
    }
    else {
        let useradded=await userModel({ userName, email, password,phone})
        let added=await useradded.save()
        res.json({message:"added",added})
    }
}


// 3-UpdateByID

export const update = async (req,res)=>{
    const {how} = req.body
    const updateUser = await  userModel.updateMany({},{how})
    res.json({message:"updated",updateUser})
}


// 4-deleteByID

export const deleteuser = async (req,res)=>{
    const {id} = req.params;
    const deleteuser = await  userModel.deleteOne({_id:id})
    res,json({message:"deleted user",deleteuser})
}




// 5-GetUserByID

export const find = async (req, res) => {
let {id} = req.params
let {name} = req.body
    const finduser = await userModel.find({_id:id},{userName:name});
    res.json({ message: "find  ", finduser });
}


// 6-Search by name

export const search = async (req,res)=>{
  
    let {name} = req.body
    const finduser = await userModel.find({userName:name});
    res.json({message:"ok",finduser})
}


