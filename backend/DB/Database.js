import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        const db = process.env.MONGODB_URI;
        
        if (!db) {
            throw new Error("MONGODB_URI environment variable is not defined");
        }
        
        const { connection } = await mongoose.connect(db, { useNewUrlParser: true });
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit process with failure
    }
}