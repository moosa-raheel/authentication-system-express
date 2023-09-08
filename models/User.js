import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fname: { type: String, required: true, trim: true },
  sname: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  dob: { type: String, required: true, trim: true },
  gender: { type: String, required: true, trim: true },
  join: { type: Date, default: Date.now },
});
const UserModel = mongoose.model("user", userSchema);
export { UserModel };
