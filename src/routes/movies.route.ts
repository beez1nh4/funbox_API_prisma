import { Router } from "express";
import { listAllMovies, postMovie } from "../controllers/movies.controller.js";
import { movieBodyValidation } from "../middlewares/verifyMovieBody.middleware.js";

const router = Router();

router.get("/movies", listAllMovies);
router.post("/movies", movieBodyValidation, postMovie)

export default router;