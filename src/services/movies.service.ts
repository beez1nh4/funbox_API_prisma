import movieRepository from "../repositories/movies.repository.js";
import { Response } from "express";

export async function postOriginalMovie(res: Response, name: string, platformId: number, genreId: number): Promise<void>{
    if (await movieRepository.movieExistsInDatabase(name) === false){
        await movieRepository.insertMovie(name, platformId, genreId);
    } else {
        throw res.status(409).send({ message: "This movie alrealdy exists!" });
      }
    }

const movieService = {
    postOriginalMovie
}

export default movieService;