import { Router } from "express";
import { userController } from "../controllers/userController.js";
const router = Router();
router.get("/", userController.home);
router.post("/", userController.verifyUser);
router.post("/signup", userController.createUser);
router.get("/logout", userController.logout);
export default router;
