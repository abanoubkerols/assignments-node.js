
import mongoose from 'mongoose'

// create user schema 
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type:String
    },
    age: {
        type:Number
    }

}, {
    timestamps: true
})

const userModel = mongoose.model('User', userSchema)
export default userModel