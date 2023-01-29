import { Request, Response } from "express";
import genreRepository from "../repositories/genres.repository.js";
import { Label } from "../schemas/label.schema.js";
import genreService from "../services/genres.service.js";

export async function listAllGenres(req: Request, res: Response): Promise<object> {
    const result = await genreRepository.findGenres();
    return res.send(result)
}

export async function postGenre(req: Request, res: Response): Promise<void>{
    const body = req.body as Label;
 
    try{
        await genreService.postOriginalGenre(res, body.name);
        res.sendStatus(201);
        return
    } catch (err){
        return
    }
}