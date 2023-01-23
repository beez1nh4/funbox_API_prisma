import { Router } from "express";
import { listAllGenres, postGenre } from "../controllers/genres.controller.js";
import { labelBodyValidation } from "../middlewares/verifyLabelBody.middleware.js";

const router = Router();

router.get("/genres", listAllGenres);
router.post("/genres", labelBodyValidation, postGenre)

export default router;