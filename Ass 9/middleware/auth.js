import userModel from "./../DB/models/user.model.js"
import Jwt from "jsonwebtoken";

export const auth = () => {
    return async (req, res, next) => {
        try {

            const { authorization } = req.headers
            if (authorization && authorization.startsWith(process.env.startToken)) {
                const token = authorization.split(" ")[1]
                const decoded = Jwt.verify(token, process.env.tokenlogin)
                if (decoded) {
                    const user = await userModel.findById(decoded.id)
                    if (user) {
                        req.user = user
                        next()
                    } else {
                        res.json({ message: " email not confirmed to you  " })
                    }
                }
                else {
                    res.json({ message: "invlid token" })
                }
            } else {
                res.json({ message: "invlid token or not send" });
            }

        }
        catch (error) {
            res.json({ message: "catch error", error })

        }
    }
}
