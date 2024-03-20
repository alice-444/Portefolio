import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profileImage: {
    type: String,
    default: "",
  },
  orders: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    default: [],
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;