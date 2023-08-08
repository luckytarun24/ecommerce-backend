import mongoose from "mongoose";
import config from "../config.js";

const connect = async () => {
  try {
    const connection = await mongoose.connect(config.dbUri);
    console.log("Database connection successful", connection.version);
  } catch (error) {
    console.error("Database connection error", error.message);
  }
};

export default connect;
