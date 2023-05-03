import { sequelize } from "../connect.js"
import { DataTypes } from "sequelize"

export  const productMmodel = sequelize.define('product',{
    productName: {
        type: DataTypes.STRING(50),
        allowNull:false,
      
    },
    description:{
        type:DataTypes.STRING(100),
        unique:true,
        allowNull:false,

    },
    price:{
         type:DataTypes.FLOAT
    }
   
})