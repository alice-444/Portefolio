import mongoose from "mongoose";

const MongooseConnect = () => {
  if (mongoose.connection.readyState === "1") {
    return mongoose.connection.asPromise();
  } else {
    const uri = process.env.MONGODB_URL;
    return mongoose.connect(uri);
  }
};

export default MongooseConnect;
