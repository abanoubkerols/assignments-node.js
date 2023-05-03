import { productMmodel } from "../../../DB/models/product.model.js";
import { userMmodel } from "../../../DB/models/user.model.js";
import { Op } from "sequelize";
// 10 _ get all product list
const getAllProduct = async (req, res) => {
    const products = await productMmodel.findAll({
    })
    res.json({ message: "done", products })

}

// 11_ add product

const addProduct = async (req, res) => {
    const { productName , price , description } = req.body
    const addedProduct = await productMmodel.create({ productName , price , description })
    res.json({ message: 'added', addedProduct })
}


//12_ delete product by id
const deletProduct = async (req, res) => {
    const { id } = req.params;
    const productDeleted = await productMmodel.destory({
        where: {
            id
        }
    })
    if (productDeleted) {
        res.json({ message: "done" })

    }
    else {
        res.json({ message: "in-valid" })
    }
}

//13_get product by id and display product createdBy  information like username and email 
const displayAllProduct = async (req, res) => {
    const productsData = await productMmodel.findAll({
        include: { model: userMmodel ,
          attributes: ['username', 'email']
        }
    })
    res.json({ message: "done", productsData })
}


// 14_update product by id
const updateProduct = async (req, res) => {
    const { id } = req.params
    const { productName,description ,price	 } = req.body
    const updatedProduct = await productMmodel.update({
        where: { id },


        productName,description,price
    })
    if (updatedProduct[0]) {
        res.json({ message: "updated", updatedProduct })
    }
    else {
        es.json({ message: "in-valid" })
    }

}

// 15_search product by name 
const searchProduct = async (req, res) => {
    try {
        const { name } = req.query
        const search = await productMmodel.findAll({
            where: {
                productName: {
                    [Op.substring]:
                        name
                }
            }

        })
        if(search.length==0){
            res.json({ message: "no data" })
        }else{
            res.json({ message: "done", search })

        }

    } catch (error) {
        console.log(error.parent.errno);
        if (error.parent.errno == 1062) {
            res.json({ message: "no data found " })
        }
        else {
            res.json({ error })
        }
    }
}


export {
    getAllProduct,addProduct,deletProduct,displayAllProduct,updateProduct,searchProduct
}

