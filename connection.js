import mongoose from "mongoose";

export default async function connection()
{
    const URI=process.env.URI+process.env.DB_NAME;
    const db=await mongoose.connect(URI);
    console.log("DATABASE CONNECTED");
    return db;
}