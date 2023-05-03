import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
   
    content: String,
    image: {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
        
    },
    createdBy : { type: mongoose.Schema.Types.ObjectId, require: true  , ref :"User"},
   
}, {
    timestamps: true
})
const postModel =  mongoose.model("Post" , postSchema);

export default postModel 