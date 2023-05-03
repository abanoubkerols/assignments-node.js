// import jsonWebToken
import jwt from 'jsonwebtoken'

// import UserSchema
import userModel from "./../DB/model/User.model.js"

// create middleware for validation from  loggin user
export const auth = () => {
    return async (req , res  , next) => {
        try {
            const { authorization  } = req.headers;
            console.log(authorization);
            if (!authorization || !authorization.startsWith(process.env.startToken)) {
                res.josn({ message: "in-valid token header" })
            }
            else {
                const token = authorization.split(" ")[1]
                const decoded = jwt.verify(token, process.env.tokenSignature )
                console.log(token);
                if (!decoded  || !decoded.id) {
                    res.josn({ message: "in-valid token payload  " })
                }
                else {
                    const user = await userModel.findById(decoded.id).select('userName email')
                    if (!user) {
                        res.josn({ message: "in-valid token user" })
                    }
                    else {
                        req.user = user
                        next()
                    }
                }
            }
        } catch (error) {
            res.json({ message: "catch error", error })
        }
    }
}