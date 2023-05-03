import sql from "mysql2";
const datainfo =sql.createConnection({
    host :"localhost",
    database:"crud_oprations",  
    user:"root",
    password:''
})

export default datainfo