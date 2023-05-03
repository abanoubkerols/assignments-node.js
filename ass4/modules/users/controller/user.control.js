import mysql from '../../../DataBase/connection.js'

// 1_ add user 
const adduser = (req, res) => {
  let { name, email, password, age, address } = req.body;

  mysql.execute(`insert into users(UserName,Email,PASSWORD,Age,address) values ('${name}','${email}','${password}',
  ${age},'${address}')`, (err, result) => {
    if (err) {
      res.json({ message: "sql Error", err });
    } else {
      if (result.affectedRows) {
        res.json({ message: "good", result });
      }
      else {
        res.json({ message: "invalid data" }, result);
      }
    }
  }
  );
  console.log(name, email, password, age, address);
};


// signin

 export const signin = (req, res) => {
  const {  email, password } = req.body;
  mysql.execute(`SELECT * FROM users where Email='${email}' And PASSWORD='${password}' `, (err, result) => {
    if (err) {
      res.json({ message: "sql Error", err });
    } else {
      if(result.length){
        res.json({ message: "good", result });

      }
      else{
        res.json({ message: " Error" });


      }
  
      }
      
    
  }
  )};



//2_ update user by id 
const updateuser = (req, res) => {
  let { id } = req.params;
  let { name, email, password, age, address } = req.body;
  mysql.execute(`UPDATE users SET  username='${name}' , email='${email}' , password='${password}',age='${age}',address='${address}'  where id='${id}'`, (err, result) => {
    if (err) {
      res.json({ message: "sql Error", err });
    } else {
      res.json({ message: "good", result });
    }
  })
};

//3 delete user by id
const deleteuser = (req, res) => {
  let { id } = req.params;
  mysql.execute(`DELETE FROM users WHERE id='${id}'`, (err, result) => {
    if (err) {
      res.json({ message: "sql Error", err });
    }
    else {
      if (result.affectedRows) {
        res.json({ message: "good", result });
      }
      else {
        res.json({ message: "invalid data ", result });
      }

    }
  })
}

// 4_get user by id
const getuser = (req, res) => {
  let { id } = req.params
  mysql.execute(`SELECT * FROM users WHERE id=${id}`, (err, result) => {
    if (err) {
      res.json({ message: "sql Error", err });
    } else {
      if (result.affectedRows) {
        res.json({ message: "good", result });
      }
      else {
        res.json({ message: "invalid data ", result });
      }
    }
  });
};

// 5_get all users list
const allusers = (req, res) => {
  mysql.execute(`SELECT * FROM users`, (err, result) => {
    if (err) {
      res.json({ message: "sql Error", err });
    } else {
      res.json({ message: "good", result });
    }
  });
};

// 6_ get all user by age between  x any y for example 20,26
const getUserAge = (req, res) => {
  let { age1, age2 } = req.query;
  mysql.execute(`SELECT * FROM users where age between ${age1} and ${age2}`, (err, result) => {
    if (err) {
      res.json({ message: "sql Error", err });
    } else {
      res.json({ message: "good", result });
    }
  });
};

// 7_get all user by name start with x for example  mahm
const startWithChar = (req, res) => {
  let { searchkey } = req.query;
  mysql.execute(`select * from users where userName like '${searchkey}%' `, (err, result) => {
    if (err) {
      res.json({ message: "sql Error", err });
    } else {
      if (result.affectedRows) {
        res.json({ message: "good", result });

      }
      else {
        res.json({ message: "invalid data ", result });

      }
    }
  })
};

// 8_ get users age less than x for example  25
const smallerAge = (req, res) => {
  let { age } = req.query;
  mysql.execute(`select * from users where  age < ${age}`, (err, result) => {
    if (err) {
      res.json({ message: "sql Error", err });
    } else {
      res.json({ message: "good", result });
    }
  })
};

// 9_get all users age greater than x for example  30
const greaterAge = (req, res) => {
  let { age } = req.query;
  mysql.execute(`select * from users where  age > ${age}`, (err, result) => {
    if (err) {
      res.json({ message: "sql Error", err });
    } else {
      res.json({ message: "good", result });
    }
  })
};











//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// const getName = (req, res) => {
//   let { id } = id
//   sql.execute(`SELECT * FROM users WHERE id=${id}`, (err, result) => {
//     if (err) {
//       res.json({ message: "sql Error", err });
//     } else {
//       res.json({ message: "good", result });
//     }

//   }

//   )
// }

// const getEmail = (req, res) => {

//   let { email } = email


//   sql.execute(`SELECT * FROM users WHERE  email=${email}`, (err, result) => {
//     if (err) {
//       res.json({ message: "sql Error", err });
//     }
//     else {
//       res.json({ message: "invalid data ", result });
//     }
//   }
//   )
// }

// const searchlike = (req, res) => {
//   let { searchkey, age } = req.query;
//   mysql.execute(`select * from products where userName like '%${searchkey}%' and age > ${age} `, (err, result) => {
//     if (err) {
//       res.json({ message: "sql Error", err });
//     } else {
//       if (result.affectedRows) {
//         res.json({ message: "good", result });
//       }
//       else {
//         res.json({ message: "invalid data ", result });
//       }

//     }
//   }
//   )
// }



export {
  adduser, updateuser, deleteuser, getuser, allusers, getUserAge, startWithChar, smallerAge, greaterAge
}