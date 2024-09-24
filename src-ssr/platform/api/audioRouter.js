import express from "express";
import AudioItemController from "../../controllers/AudioItemController";

const router = express.Router();

router.get("/", AudioItemController.getAudioItems);
router.get("/:id", AudioItemController.getAudioItem);

router.get("/favorites", AudioItemController.getFavorites);

export default router;
