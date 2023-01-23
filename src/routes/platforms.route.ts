import { Router } from "express";
import { listAllPlatforms, postPlatform } from "../controllers/platforms.controller.js";
import { labelBodyValidation } from "../middlewares/verifyLabelBody.middleware.js";


const router = Router();

router.get("/platforms", listAllPlatforms);
router.post("/platforms", labelBodyValidation, postPlatform)

export default router;  