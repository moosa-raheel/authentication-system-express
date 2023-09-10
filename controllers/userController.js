import { UserModel } from "../models/User.js";
import bcrypt from "bcrypt";
class userController {
  static home = (req, res) => {
    if (req.session.username) {
      res.render("index", { obj: req.session });
    } else {
      res.render("login", { obj: req.session });
    }
  };
  static verifyUser = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await UserModel.findOne({ email: username });
      if (user) {
        const hashPassword = await bcrypt.compare(password, user.password);
        if (hashPassword) {
          req.session.username = username;
        } else {
          req.session.wPassword = true;
        }
      } else {
        req.session.nAccount = true;
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
  static logout = (req, res) => {
    try {
      req.session.destroy(() => {});
    } catch (err) {
      console.log(err);
    }
    res.redirect("/");
  };
}
export { userController };
