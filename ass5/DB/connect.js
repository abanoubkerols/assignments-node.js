import {Sequelize} from 'sequelize'
export const sequelize = new Sequelize('sequelize_5' ,'root', '',{
    host:'localhost',
    dialect:'mysql'
}) 

export const create= () =>{
    return sequelize.sync({}).then(result=>{
        console.log("good connection");
    }).catch(err=>{
        console.log(err);
    })
}