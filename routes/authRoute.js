const express = require("express");
const authController = require("../app/http/controllers/authController");
const userValidate = require("../app/http/requests/userFormRequest");
const {
  limiter,
  isLoggedIn,
  isLoggedOut,
} = require("../app/http/middleware/authMiddleware");
const authRouter = express.Router();

/*
|--------------------------------------------------------------------------
|                           Authentication Routes
|--------------------------------------------------------------------------
 */

// For Route /api/auth-> [Login, Logout, Change Password, Forgot Password, Reset Password]
authRouter.post(
  "/login",
  limiter,
  isLoggedOut,
  userValidate.loginValidation,
  authController.userLogin
);
authRouter.get("/logout", isLoggedIn, authController.userLogout);
authRouter.put(
  "/change-password",
  isLoggedIn,
  userValidate.updatePassowrdValidation,
  authController.updatePassword
);
authRouter.put(
  "/forgot-password",
  isLoggedOut,
  userValidate.forgotPasswordValidation,
  authController.forgotPassword
);
authRouter.put(
  "/reset-password/:token",
  limiter,
  isLoggedOut,
  userValidate.resetPassowrdValidation,
  authController.resetPassword,
  authController.userLogin
);

module.exports = { authRouter };
