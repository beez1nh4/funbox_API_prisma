import { Request, Response } from "express";
import genreRepository from "../repositories/genres.repository";
import { Label } from "../schemas/label.schema";
import genreService from "../services/genres.service";

export async function listAllGenres(req: Request, res: Response): Promise<object | void> {
    try{
    const result = await genreRepository.findGenres();
    return res.send(result);
    } catch{
        res.sendStatus(404);
    }
}

export async function postGenre(req: Request, res: Response): Promise<void>{
    const body = req.body as Label;
 
    try{
        await genreService.postOriginalGenre(res, body.name);
        res.sendStatus(201);
        return
    } catch (err){
        res.sendStatus(400);
        return
    }
}