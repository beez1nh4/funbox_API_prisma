import { Router } from "express";
import { listAllMovies, listQuantityOfMoviesByGenre, postMovie } from "../controllers/movies.controller";
import { movieBodyValidation } from "../middlewares/verifyMovieBody.middleware";

const router = Router();

router.get("/movies", listAllMovies);
router.post("/movies", movieBodyValidation, postMovie)
router.get("/moviesquantitybygenre", listQuantityOfMoviesByGenre)

export default router;