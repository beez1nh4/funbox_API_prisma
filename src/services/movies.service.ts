import movieRepository from "../repositories/movies.repository";
import { Response } from "express";
import platformRepository from "../repositories/platforms.repository";
import genreRepository from "../repositories/genres.repository";

export async function postOriginalMovie(res: Response, name: string, platformId: number, genreId: number): Promise<void>{

    if (await platformRepository.platformIdExistsInDatabase(platformId)=== false){
        throw res.status(404).send({ message: "This platform doesn't exist!" });
    }

    if (await genreRepository.genreIdExistsInDatabase(genreId)=== false){
        throw res.status(404).send({ message: "This genre doesn't exist!" });
    }

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