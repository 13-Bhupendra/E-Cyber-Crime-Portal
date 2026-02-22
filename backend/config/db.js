import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_ATLAS_URL) {
      throw new Error("MONGODB_ATLAS_URL is not defined");
    }

    await mongoose.connect(process.env.MONGODB_ATLAS_URL);

    console.log("MongoDB connected successfully 🚀");
  } catch (error) {
    console.error("MongoDB connection failed ❌");
    console.error(error.message);
    process.exit(1);
  }
};

// import mongoose from "mongoose";
// import dotenv from "dotenv"
// dotenv.config()

// export const connectDB = async ()=>{
//     try {
//        await mongoose.connect(process.env.MONGODB_ATLAS_URL)
//        console.log("MongoDB connection successfull !")
//     } catch (error) {
//         console.log("mongoDB server connection failed !")
//     }
// }


