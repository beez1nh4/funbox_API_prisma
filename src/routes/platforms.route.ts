import { Router } from "express";
import { listAllPlatforms, postPlatform } from "../controllers/platforms.controller.js";


const router = Router();

router.get("/platforms", listAllPlatforms);
router.post("/platforms", postPlatform)

export default router;  