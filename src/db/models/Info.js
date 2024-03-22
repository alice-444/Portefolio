import mongoose from "mongoose";

const MeSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
});

const Me = mongoose.models.Me || mongoose.model("Me", MeSchema);

export default Me;
