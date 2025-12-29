import mongoose, { Mongoose } from "mongoose";

const ConnectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log(db);
  } catch (error) {
    console.log("error occur in db.js", error);
    process.exit(1);
  }
};

export default ConnectDB;
