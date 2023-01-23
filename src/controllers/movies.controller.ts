import { Request, Response } from "express";
import movieRepository from "../repositories/movies.repository.js";
import { Movie } from "../schemas/movies.schemas.js";
import movieService from "../services/movies.service.js";

export async function listAllMovies(req: Request, res: Response): Promise<object> {
    const result = await movieRepository.findMovies();
    return res.send(result.rows)
}

export async function postMovie(req: Request, res: Response): Promise<void>{
    const body = req.body as Movie;
 
    try{
        await movieService.postOriginalMovie(res, body.name, body.platformId, body.genreId);
        res.sendStatus(201);
        return
    } catch (err){
        return
    }
}