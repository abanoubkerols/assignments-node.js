import { productMmodel } from "../../../DB/models/product.model.js";
import { userMmodel } from "../../../DB/models/user.model.js";
import { Op } from "sequelize";
// 1_ add user 
const addUser = async (req, res) => {
    const { userName, email, password, age, address } = req.body
    const addeduser = await userMmodel.create({ userName, email, password, age, address })
    res.json({ message: 'added', addeduser })
}

//  2_ update user by id 
const updateUser = async (req, res) => {
    const { id } = req.params
    const { userName } = req.body
    const userupdate = await userMmodel.update({
        userName,
        where: { id }
    })
    if (userupdate[0]) {
        res.json({ message: "updated", userupdate })
    }
    else {
        es.json({ message: "in-valid" })
    }

}


//  3_ delete user by id 
const deleteUSer = async (req, res) => {
    const { id } = req.params;
    const userDeleted = await userMmodel.destory({
        where: {
            id
        }
    })
    if (userDeleted) {
        res.json({ message: "done" })

    }
    else {
        res.json({ message: "in-valid" })
    }
}


// 4_get user by id (with his products using include)
const getUser = async (req, res) => {
    const { id } = req.params;
    const userData = await userMmodel.findAll({
        include: { model: productMmodel },
        where: { id }
    })
    res.json({ message: "done", userData })

}


// 5_get all users list(with their products using include)
const getAllUsers = async (req, res) => {
    const usersData = await userMmodel.findAll({
        include: { model: productMmodel }
    })
    res.json({ message: "done", usersData })

}

// 6_ get all user by age between  x any y for example 20,26
const getAllUserAge = async (req, res) => {
    const { age1, age2 } = req.query
    const usersData = await userMmodel.findAll({
        where: {
            age: {
                [Op.between]:
                    [age1, age2]
            }
        }
    })
    res.json({ message: "done", usersData })

}


// 7_get all user by name start with x for example  mahm
const getAllUserName = async (req, res) => {
    try {
        const { name } = req.query
        const usersData = await userMmodel.findAll({
            where: {
                userName: {
                    [Op.startsWith]:
                        name
                }
            }

        })
        if(usersData.length==0){
            res.json({ message: "no data" })
        }else{
            res.json({ message: "done", usersData })

        }

    } catch (error) {
        console.log(error.parent.errno);
        if (error.parent.errno == 1062) {
            res.json({ message: "no data found " })
        }
        else {
            res.json({ error })
        }
    }
}

// 8_ get users age less than x for example  25
const getUsersLTAge = async (req, res) => {
    try {
        const { age } = req.query
    const usersData = await userMmodel.findAll({
        where: {
            age: {
                [Op.lt]:
                    age
            }
        }
        
    })
    if(usersData.length==0){
        res.json({ message: "no data" })
    }else{
        res.json({ message: "done", usersData })

    }
    } catch (error) {
        console.log(error.parent.errno);
        if (error.parent.errno == 1062) {
            res.json({ message: "no data found " })
        }
        else {
            res.json({ error })
        }
    }

}



// 9_get all users age greater than x for example  30
const getUsersGTAge = async (req, res) => {
    try {
        const { age } = req.query
    const usersData = await userMmodel.findAll({
        where: {
            age: {
                [Op.gt]:
                    age
            }
        }
        
    })
    if(usersData.length==0){
        res.json({ message: "no data" })
    }else{
        res.json({ message: "done", usersData })

    }
    } catch (error) {
        console.log(error.parent.errno);
        if (error.parent.errno == 1062) {
            res.json({ message: "no data found " })
        }
        else {
            res.json({ error })
        }
    }

}


export {
    addUser, updateUser, deleteUSer, getUser, getAllUsers, getAllUserAge
    , getAllUserName,getUsersLTAge,getUsersGTAge
}