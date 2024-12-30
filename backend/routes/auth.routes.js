import express from "express";
import { registerUser, loginUser, logoutUser,getAllUsers ,sendEmail,forgotPassword,resetPassword,updateProfile} from "../controllers/auth.controller.js";
import protect from '../utils/protectroute.js';

const router = express.Router();

// Register route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
// Assuming you are using express and you've imported the required modules

router.put('/profile/:userId', updateProfile);

// Reset Password route
router.post("/reset_password", resetPassword);
// Logout route
router.post("/logout", logoutUser);
router.get("/users", getAllUsers);
router.post("/send-email", sendEmail);
export default router;
