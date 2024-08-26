import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     
     roll:{
         type:Number,
         required:true,
         unique:true
     },
     name:{
          type:String,
          required:true
     },
     email:{
          type:String,
          required:true,
          unique:true
     },
     projectname:{
          type:String,
          required:true
     }
},{timestamps:true})

const User = mongoose.model("User", userSchema);

export default User;