import mongoose from "mongoose";

 const connection = async () => {
  return await mongoose.connect("mongodb://localhost:27017/test").then(() => {
    console.log("dataBase run...");
  });
};


export default connection