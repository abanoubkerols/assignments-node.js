
import q from "../../../DB/connection.js";

//  1-GetAllUsers
const users = (req, res) => {
  q.execute(`SELECT * FROM user where active=0`, (err, result) => {
    if (err) {
      res.json({ message: "sql Error", err });
    } else {
      res.json({ message: "good", result });
    }
  });
};

// 2-AddUser
const adduser = (req, res) => {
  let { name, email, password } = req.body;
q.execute(`insert into user(name,email,password) values ('${name}','${email}','${password}') `,(err, result) => {
      if (err) {
        res.json({ message: "sql Error", err });
      } else {
        res.json({ message: "good", result });
      }
    }
  );
};

// 3-UpdateUserByID
const update = (req, res) => {
  let { id } = req.params;
  let { name } = req.body;
  q.execute(`UPDATE user SET  name='${name}' where id='${id}'`),(err, result) => {
      if (err) {
        res.json({ message: "sql Error", err });
      } else {
        res.json({ message: "good", result });
      }
    };
};

// 4-DeleteUserByID
const deleteuser= (req,res)=>{
let {id}=req.params;
q.execute(`DELETE FROM user WHERE id='${id}'`, (err,result)=>{
    if (err) {
        res.json({ message: "sql Error", err });
      } 
      else {
        if(result.affectedRows){
            res.json({ message: "good", result });
        }
        else{
            res.json({ message: "invalid id ", result });
        }
       
      }
})
}

// 5-GetUserByID
const oneuser = (req, res) => {
  let {id}=req.query
  q.execute(`SELECT * FROM user WHERE id='${id}'`, (err, result) => {
    if (err) {
      res.json({ message: "sql Error", err });
    } else {
      res.json({ message: "good", result });
    }
  });
};

// 6-Search by name use like
const search= (req,res)=>{ 
    let {searchkey} =req.query;
    q.execute(`select * from user where name like '%${searchkey}%' `,(err,result)=>{
        if (err) {
            res.json({ message: "sql Error", err });
          } else {
            res.json({ message: "good", result });
          }
    })
}

// 7-Get all user reversed
const reverseUsers = (req, res) => {
  q.execute(`SELECT *  FROM user order by name desc`, (err, result) => {
    if (err) {
      res.json({ message: "sql Error", err });
    } else {
      res.json({ message: "good", result });
    }
  });
};

// 8- search user age between 20 and 40
const searchAge = (req, res) => {
  let {age1 , age2} =req.query;

  q.execute(`SELECT * FROM user where age between ${age1} and ${age2}`, (err, result) => {
    if (err) {
      res.json({ message: "sql Error", err });
    } else {
      res.json({ message: "good", result });
    }
  });
};

// 9-get user name start with A and age less than 30 
const startWithChar= (req,res)=>{ 
  let {searchkey , age} =req.query;
  q.execute(`select * from user where name like '${searchkey}%' and age < ${age}`,(err,result)=>{
      if (err) {
          res.json({ message: "sql Error", err });
        } else {
          res.json({ message: "good", result });
        }
  })
};

// 10-get user name end with  d or age greater than 50 
const endWithChar= (req,res)=>{ 
  let {searchkey , age} =req.query;
  q.execute(`select * from user where name like '%${searchkey}' or age > ${age}`,(err,result)=>{
      if (err) {
          res.json({ message: "sql Error", err });
        } else {
          res.json({ message: "good", result });
        }
  })
};

// 11-get user name contain  r   and  age greater than 20 and less than 25
const containChar= (req,res)=>{ 
  let {searchkey , age1 ,age2} =req.query;
  q.execute(`select * from user where name like '%${searchkey}%' and age > ${age1} and age < ${age2}` ,(err,result)=>{
      if (err) {
          res.json({ message: "sql Error", err });
        } else {
          res.json({ message: "good", result });
        }
  })
};






// 12- soft delete user
const softDelete = (req,res) => {
    let {bool}=req.body
  
    let {id}=req.params
    console.log(bool ,id);
  q.execute(`update user set active ='${bool}' where id=${id}`, (err, result) => {

    if (err) {
      res.json({ message: "sql Error", err });
    } else {
      res.json({ message: "good", result });
    }
  });
};

export { users,oneuser,adduser,update,deleteuser,search,reverseUsers,searchAge,startWithChar,endWithChar,containChar,softDelete};
