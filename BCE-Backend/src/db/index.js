import mongoose from "mongoose";


const connectDB = async () => {
    try {
    const connection = await mongoose.connect(`${process.env.mongodb_url}/${process.env.DB_NAME}`,{})
        console.log("Database connected successfully");
    } catch (error) {
        console.error(`Error: ye connect kyu nahi ho raha hai `);
        process.exit(1);
    }
}

export default connectDB;