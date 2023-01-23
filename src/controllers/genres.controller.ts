import { Request, Response } from "express";
import genreRepository from "../repositories/genres.repository.js";
import { Label } from "../schemas/label.schema.js";

export async function listAllGenres(req: Request, res: Response): Promise<object> {
    const result = await genreRepository.findGenres();
    return res.send(result.rows)
}

export async function postGenre(req: Request, res: Response): Promise<void>{
    const body = req.body as Label;
 
    try{
        await genreRepository.insertGenre(body.name);
        res.sendStatus(201);
        return
    } catch (err){
        res.sendStatus(500);
        return
    }
}