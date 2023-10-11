import mongoose from "mongoose";
import User from "./user.model.mjs";
const connectDb = async () => {
  const mongoUrl = process.env.MONGODB_URI;
  if (!mongoUrl) throw new Error("MONGODB_URI is not defined");
  const connect = await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  return connect;
};
const models = { User };
export { connectDb };
export default models;
