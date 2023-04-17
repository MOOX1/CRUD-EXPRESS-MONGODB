import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class MongoClient {
  async connect(): Promise<void> {
    console.log(process.env.MONGOURL);
    await mongoose
      .connect(process.env.MONGOURL)
      .then(() => console.log("database is connected"))
      .catch((error) => console.log(error));
  }
}

export default new MongoClient();
