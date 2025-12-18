import mongoose from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://greatstack:greatstack@cluster0.vznkpue.mongodb.net/food-del')).isObjectIdOrHexString(()=>console.log("DB Connected"));
}