import { Request, Response } from "express";
import movieRepository from "../repositories/movies.repository";
import { Movie } from "../schemas/movies.schemas";
import movieService from "../services/movies.service";

export async function listAllMovies(req: Request, res: Response): Promise<object> {
    const result = await movieRepository.findMovies();
    return res.send(result)
}

export async function postMovie(req: Request, res: Response): Promise<void>{
    const body = req.body as Movie;
 
    try{
        await movieService.postOriginalMovie(res, body.name, body.platformId, body.genreId);
        res.sendStatus(201);
        return
    } catch (err){
        res.sendStatus(400);
        return
    }
}

export async function listQuantityOfMoviesByGenre(req: Request, res: Response): Promise<object> {
    const result = await movieRepository.findQuantityOfMoviesByGenre();
    return res.send(result)
}