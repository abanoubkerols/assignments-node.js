// import UserSchema
import userModel from "./../../../DB/model/User.model.js"

// import bcrypt 
import bcrypt from 'bcryptjs'

// import jsonWebToken
import jwt from 'jsonwebtoken'


//registration for new user
export const signUp = async (req, res) => {
    try {
        let { userName, email, password, confirmPassword } = req.body;
        if (password == confirmPassword) {
            const newUser = await userModel.findOne({ email });
            if (newUser) {
                res.json({ message: "user Aleardy register" })
            } else {
                const hash = await bcrypt.hashSync(password, parseInt(process.env.hashRound))
                const addUser = await userModel({ userName, email, password: hash });
                const userAdded = await addUser.save()
                res.json({ message: "user added ", userAdded });
            }
        }
        else {
            res.json({ message: "password not match" })
        }
    }
    catch (error) {
        res.json({ message: "catch error", error })
    }

}


// login for user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (user) {
            const matched = await bcrypt.compareSync (password, user.password)
            if (matched) {
                const token = jwt.sign({ id: user._id }, process.env.tokenSignature, { expiresIn: 60 * 60 })
                res.json({ message: "you are logged in now ", token })
            }
            else {z
                res.json({ message: "maybe your password wrong" })
            }
        }
          else {
            res.json({ message: "you have to register" })
        }
    }
    catch (error) {
        res.json({ message: "catch error", error })
    }
}

//Change password for user
export const update = async (req, res) => {
    try {
        const { password } = req.body;
        const id = req.user._id;
        const hash = await bcrypt.hashSync(password, parseInt(process.env.hashRound))
        const user = await userModel.findByIdAndUpdate({ _id: id }, { password: hash });
        const matched = await bcrypt.compareSync(password, user.password)
        if (matched) {
            res.json({ message: "done ", user })
        } else {
            res.json({ message: "update is not complete  " })
        }
    } catch (error) {
        res.json({ message: "catch error", error })
    }
}

//update user 
export const updateAccount = async (req, res) => {
    try {
        const { userName, email, password, age, phone } = req.body;
        const id = req.user._id;
        const hash = await bcrypt.hashSync(password, parseInt(process.env.hashRound))
        const user = await userModel.findOneAndReplace({ _id: id },
            { userName, email, password: hash, age, phone },
            { new: true })
        const matched = await bcrypt.compareSync(password, user.password)
        res.json({ message: "Profile", user })
    } catch (error) {
        res.json({ message: "catch error", error })
    }
}

//delete user 
 export const daleteUser = async (req, res) => {
    try {
            const id  = req.user._id;
            const user = await userModel.findById(id);
            if (user) {
                const userDelted = await userModel.findOneAndDelete({
                  _id: id
                });
                res.json({ message: "Done", userDelted });
              
            } else {
              res.json({ message: "user not found" });
            }
    } catch (error) {
        res.json({ message: "catch error", error })

    }
  };