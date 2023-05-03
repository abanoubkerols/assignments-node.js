import { Router } from "express";
import {allProduct,productAdded,deleteProduct,getProduct,updateProduct,search} from "./controller/product.control.js"

const routerProduct=Router();


// 10 _ get all product list (with the data of the user who create the product)
routerProduct.get('/allProduct',allProduct)

// 11_ add product
routerProduct.post('/addProduct',productAdded)

// 12_ delete product by id
routerProduct.delete('/deleteProduct/:id',deleteProduct)

// 13_get product by id and display product createdBy  information like username and email
routerProduct.get('/getProduct/:id',getProduct)

// 14_update product by id
routerProduct.put('/updateProduct/:id',updateProduct)

// 15_search product by name 
routerProduct.get('/search',search)

export default routerProduct