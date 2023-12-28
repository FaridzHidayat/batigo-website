import mongoose from "mongoose";
// track the connection
let isConnected = false;
export const connectToDataBase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB connected already");
    return;
  }
  try {
    console.log("masuk sini");
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "batigo-exclusive",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};