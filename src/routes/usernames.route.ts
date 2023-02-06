import { Router } from "express";
import { listAllUsernames, postUsername } from "../controllers/usernames.controller";
import { labelBodyValidation } from "../middlewares/verifyLabelBody.middleware";


const router = Router();

router.get("/usernames", listAllUsernames);
router.post("/usernames", labelBodyValidation, postUsername)

export default router;  