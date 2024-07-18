import express from "express";
const router = express.Router();
import UserController from "../../controllers/UserController";

router.get("/", UserController.getUsers);

router.get("/:id", UserController.getUser);

router.post("/", UserController.createUser);

router.put("/:id", UserController.updateUser);

router.delete("/:id", UserController.deleteUser);

module.exports = router;
