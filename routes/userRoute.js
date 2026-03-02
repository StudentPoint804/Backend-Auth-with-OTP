import express from "express";
import { changePassword, forgotPassword, loginUser, logoutUser, registerUser, Verification, verifyOTP } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";
import { userSchema, validateUser } from "../validators/userValidator.js";

const router = express.Router();


router.post('/register',validateUser(userSchema), registerUser)
router.post('/verify', Verification)
router.post('/login', loginUser)
router.post('/logout', isAuthenticated, logoutUser)
router.post('/forget-password', forgotPassword)
router.post('/verify-otp/:email', verifyOTP)
router.post('/change-password/:email', changePassword)



 
export default router;