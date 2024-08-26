import mongoose  from "mongoose";

const dbCon = async ()=>{
 try {
      await mongoose.connect("mongodb://localhost:27017/mern_crud");
     console.log("Database connected successfully");
} catch (error) {
     console.log(error);
}
}

export default dbCon;