import { UserModel } from "../models/User.js";
import bcrypt from "bcrypt";
class userController {
  static home = (req, res) => {
    res.render("index");
  };
  static verifyUser = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await UserModel.findOne({ email: username });
      if (user) {
        const hashPassword = await bcrypt.compare(password, user.password);
        if (hashPassword) {
          console.log("login successfully");
        } else {
          console.log("Password is incorrect");
        }
      } else {
        console.log("Account not found");
      }
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  };
  static createUser = async (req, res) => {
    try {
      const { fname, sname, email, password, dob, gender } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);
      const userDetail = new UserModel({
        fname: fname,
        sname: sname,
        email: email,
        password: hashPassword,
        dob: dob,
        gender: gender,
      });
      await userDetail.save();
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };
}
export { userController };
