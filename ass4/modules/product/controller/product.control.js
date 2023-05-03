import mysql from '../../../DataBase/connection.js'

// 10 _ get all product list (with the data of the user who create the product)
export const allProduct = (req, res) => {
    mysql.execute(`select u.id as U_id , p.Product_ID , 
    u.userName , p.ProductName , p.Description , 
    p.ProductPrice from products as p inner join users as u on u.id = p.User_id `, (err, result) => {
      if (err) {
        res.json({ message: "Query error", err })
      } else {
      
          res.json({ message: "Done", result })
        
        }
      }
   ) }
  
  
  // 11_ add product
  export  const productAdded = (req, res) => {
    const { name, price, description, userID } = req.body
    mysql.execute(`insert into products (productName , description , productprice , user_ID) 
    values('${name}' , '${description}' , ${price} , ${userID})`,
      (err, result) => {
        if (err) {
          res.json({ message: "Query error", err })
        } else {
          if (result.affectedRows) {
            res.json({ message: "Done", result })
  
          } else {
            res.json({ message: "In-valid data", result })
          }
        }
      })
  }
  
  
  // 12 - deleteProduct
  export const deleteProduct = (req, res) => {
    const { id } = req.params
    mysql.execute(`delete from products where Product_ID = ${id}`, (err, result) => {
      if (err) {
        res.json({ message: "Query error", err })
      } else {
        if (result.affectedRows) {
          res.json({ message: "Done", result })
  
        } else {
          res.json({ message: "Invalid product ID" })
  
        }
      }
    })
  }
  
  // 13_get product by id and display product createdBy  information like username and email
  export const getProduct = (req, res) => {
    const { id } = req.params
    mysql.execute(`select u.id as U_id , p.Product_ID , 
    u.userName , p.ProductName , p.description , 
    p.ProductPrice from products as p inner join users as u on u.id = p.User_id 
    where p.Product_ID = ${id}`, (err, result) => {
      if (err) {
        res.json({ message: "Query error", err })
      } else {
        res.json({ message: "Done", result })
  
      }
    })
  }
  
  // 14_update product by id
  export const updateProduct = (req, res) => {
    const { id } = req.params
    const { name, price, description } = req.body
    mysql.execute(`update products set productName='${name}' ,
     productPrice=${price} , description ='${description}' 
     where id=${id}`, (err, result) => {
      if (err) {
        res.json({ message: "Query error", err })
      } else {
        res.json({ message: "Done", result })
  
      }
    })
  }
  // 15_search product by name 
export  const search = (req, res) => {
    let { searchkey } = req.query;
    mysql.execute(`select * from products where productName like '%${searchkey}%'`, (err, result) => {
      if (err) {
        res.json({ message: "sql Error", err });
      } else {
          if(result.length==0){
            res.json({ message: "no data found" });
          }
      else{
        res.json({ message: "good", result });

      }
      }
    })
  };
  
  
  

  
  
  
  
  
  
  