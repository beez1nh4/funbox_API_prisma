import { Router } from "express";
import { listAllGenres, postGenre } from "../controllers/genres.controller.js";

const router = Router();

router.get("/genres", listAllGenres);
router.post("/genres", postGenre)

export default router;