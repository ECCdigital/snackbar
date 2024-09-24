import express from "express";
import AuthController from "app/src-ssr/controllers/AuthController";

const router = express.Router();

router.post("/login", AuthController.login);
router.get("/me", AuthController.isSignedIn, AuthController.me);
router.post("/logout", AuthController.isSignedIn, AuthController.logout);

router.post("/dev", AuthController.devLogin);

export default router;
