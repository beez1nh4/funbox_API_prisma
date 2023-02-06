import { Router } from "express";
import { listAllGenres, postGenre } from "../controllers/genres.controller";
import { labelBodyValidation } from "../middlewares/verifyLabelBody.middleware";

const router = Router();

router.get("/genres", listAllGenres);
router.post("/genres", labelBodyValidation, postGenre)

export default router;