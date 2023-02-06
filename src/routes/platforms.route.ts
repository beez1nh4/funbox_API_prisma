import { Router } from "express";
import { listAllPlatforms, postPlatform } from "../controllers/platforms.controller";
import { labelBodyValidation } from "../middlewares/verifyLabelBody.middleware";


const router = Router();

router.get("/platforms", listAllPlatforms);
router.post("/platforms", labelBodyValidation, postPlatform)

export default router;  