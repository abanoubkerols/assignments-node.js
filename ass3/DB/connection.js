import mysql from "mysql2";
 const info= mysql.createConnection({
    host: "localhost",
    database: "start",
    user:'root',
    password:''
  });

  export default info;