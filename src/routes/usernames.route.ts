import { Router } from "express";
import { listAllUsernames, postUsername } from "../controllers/usernames.controller.js";
import { labelBodyValidation } from "../middlewares/verifyLabelBody.middleware.js";


const router = Router();

router.get("/usernames", listAllUsernames);
router.post("/usernames", labelBodyValidation, postUsername)

export default router;  