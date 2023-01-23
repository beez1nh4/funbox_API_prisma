import { Router } from "express";
import { listAllMovies, listQuantityOfMoviesByGenre, postMovie } from "../controllers/movies.controller.js";
import { movieBodyValidation } from "../middlewares/verifyMovieBody.middleware.js";

const router = Router();

router.get("/movies", listAllMovies);
router.post("/movies", movieBodyValidation, postMovie)
router.get("/moviesquantitybygender", listQuantityOfMoviesByGenre)

export default router;