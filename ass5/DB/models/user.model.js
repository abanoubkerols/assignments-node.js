import { sequelize } from "../connect.js"
import { DataTypes } from "sequelize"

export  const userMmodel = sequelize.define('user',{
    userName: {
        type: DataTypes.STRING(50),
        allowNull:false,
      
    },
    email:{
        type:DataTypes.STRING(100),
        unique:true
    },
    password:{
         type:DataTypes.STRING(50)
    },
    age:{
         type:DataTypes.INTEGER
    },
    address:{
        type:DataTypes.STRING(100),
    }
})