import { Router } from "express";
import { listAllMovies, postMovie } from "../controllers/movies.controller.js";

const router = Router();

router.get("/movies", listAllMovies);
router.post("/movies", postMovie)

export default router;