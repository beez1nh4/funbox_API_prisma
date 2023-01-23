import { Router } from "express";
import { listAllUsernames, postUsername } from "../controllers/usernames.controller.js";


const router = Router();

router.get("/usernames", listAllUsernames);
router.post("/usernames", postUsername)

export default router;  