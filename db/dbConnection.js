import mongoose from "mongoose";
const dbConnection = async (MONGO_URI) => {
  try {
    const options = {
      user: process.env.DB_USER,
      pass: process.env.DB_PASS,
      dbName: process.env.DB_NAME,
      authSource: process.env.AUTH_SOURCE,
    };
    await mongoose.connect(MONGO_URI, options);
    console.log("Database Connect successfully");
  } catch (error) {
    console.log(error);
  }
};
export { dbConnection };
