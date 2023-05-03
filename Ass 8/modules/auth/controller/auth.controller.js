import userModel from "./../../../DB/models/user.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendToEmail } from "../../../service/sendEmail.js";

// ## 1- Sign Up (Send email to user) (Aplly Joi validation)( token expired in 1 minute )
export const signUp = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        const isUser = await userModel.findOne({ email });
        if (isUser) {
            res.json({ message: "you are already register" });
        } else {
            let hashPass = await bcrypt.hash(
                password,
                parseInt(process.env.hashPass)
            );
            let user = new userModel({ userName, email, password: hashPass });
            let saveUser = await user.save();
            let token = jwt.sign({ id: saveUser._id }, process.env.tokenEmail, {
                expiresIn: 60,
            });
            let refreshToken = jwt.sign(
                { id: saveUser._id },
                process.env.tokenEmail,
                { expiresIn: 60 * 60 }
            );
            let message = `<a href="http://localhost:3000/api/v1/auth/confirmEmail/${token}">please click here to verify your email</a>
            <br>
            <br>
            <a href="http://localhost:3000/api/v1/auth/refreshToken/${refreshToken}">please click to refreshToken</a>
             `;
            sendToEmail(saveUser.email, message);
            res.json({ message: "added", saveUser });
        }

    } catch (error) {
        res.json({ message: "catch error", error });
    }
};

// ## 2- Sign in (send token) (user must be confirmed)(Aplly Joi validation)

export const signIn = async (req, res) => {
    try {
        const { password, email } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            const matched = await bcrypt.compare(password, user.password);
            if (matched) {
                if (user.confirmEmail) {
                    const token = jwt.sign({ id: user._id }, process.env.tokenlogin);
                    res.json({ message: "you are login ", token });
                } else {
                    res.json({ message: "please confrim your email first" });
                }
            } else {
                res.json({ message: "password wrong" });
            }
        } else {
            res.json({ message: "you have to register  " });
        }
    } catch (error) {
        res.json({ message: "catch error", error });
    }
};

// ## 3- Refresh token

export const refreshToken = async (req, res) => {
    try {
        let { token } = req.params;
        let decoded = jwt.verify(token, process.env.tokenEmail)
        if (!decoded || !decoded.id) {
            res.json({ message: "invalid token" })
        }
        else {
            let user = await userModel.findById(decoded.id)
            if (!user) {
                res.json({ message: "user not register" })
            } else {
                if (user.confirmEmail) {
                    res.json({ message: "already confirmed" })
                } else {
                    let token = jwt.sign({ id: user._id }, process.env.tokenEmail);
                    let message = `<a href="http://localhost:3000/api/v1/auth/confirmEmail/${token}">this is the second email</a>`;
                    sendToEmail(user.email, message);
                    res.json({ message: "Done please check you email" });
                }
            }
        }

    } catch (error) {
        res.json({ message: "catch error", error });
    }
};


// ## 4- forget password 

// 1- sendCode frist 

export const sendCode = async (req, res) => {
    try {
        const { email } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            res.json({ message: "user not register" })

        } else {
            let OtpCode = Math.floor(Math.random() * (3000 - 2000 + 1) + 2000)
            await userModel.findByIdAndUpdate(user._id, { code: OtpCode })
            let message = `your code is ${OtpCode}`
            sendToEmail(user.email, message);
            res.json({ message: "Done please check you email" });
        }
    } catch (error) {
        res.json({ message: "catch error", error });
    }
}

// 2 - Re Write your Password 

export const forgetPassword = async (req, res) => {
    try {
        const { code, email, password } = req.body
        if (!code) {
            res.json({ message: "code is not valid" })
        }
        else {
            const user = await userModel.findOne({ email, code });
            if (!user) {
                res.json({ message: "email not valid" })
            }
            else {
                const hashPass = await bcrypt.hash(password, parseInt(process.env.hashPass))
                const upDate = await userModel.findByIdAndUpdate(user._id, { code: null, password: hashPass }, { new: true })
                res.json({ message: "password is done ", upDate });
            }
        }
    } catch (error) {
        res.json({ message: "catch error", error });

    }
}


// confirm Email  API

export const confirmEmail = async (req, res) => {
    try {
        const { token } = req.params
        const decoded = jwt.verify(token, process.env.tokenEmail)
        if (decoded) {
            const user = await userModel.findOne({ _id: decoded.id, confirmEmail: false })
            if (user) {
                const upDateUser = await userModel.findByIdAndUpdate(decoded.id, { confirmEmail: true }, { new: true })
                res.json({ message: "update ", upDateUser })

            } else {
                res.json({ message: "you are register already " })
            }
        }
        else {
            res.json({ message: "invalid token " })
        }
    } catch (error) {
        res.json({ message: "catch error  ", error })

    }
}