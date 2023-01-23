import { Router } from "express";
import { listAllMovies } from "../controllers/movies.controller.js";

const router = Router();

router.get("/movies", listAllMovies);

export default router;