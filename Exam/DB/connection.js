import mongoose from 'mongoose'

const connectDB = async () => {
    return await mongoose.connect(process.env.DBURl)
    .then(() => console.log("DataBase works "  + process.env.DBURl))
    .catch((err) => console.log("Error",err))
}

export default connectDB  