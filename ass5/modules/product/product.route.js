import { Router } from "express";
import {addProduct,getAllProduct,displayAllProduct,updateProduct,searchProduct,deletProduct} from './controller/product.control.js'
const productRouter=Router()

productRouter.get('getProducts',getAllProduct)

productRouter.post('/addProduct',addProduct)

productRouter.get('/displayAllProduct',displayAllProduct)

productRouter.put('/updateProduct/:id',updateProduct)

productRouter.put('/deletProduct/:id',deletProduct)

productRouter.get('/search',searchProduct)


export default productRouter