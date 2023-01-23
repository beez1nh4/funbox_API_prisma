import { Request, Response } from "express";
import platformRepository from "../repositories/platforms.repository.js";
import { Label } from "../schemas/label.schema.js";

export async function listAllPlatforms(req: Request, res: Response): Promise<object> {
    const result = await platformRepository.findPlatforms();
    return res.send(result.rows)
}

export async function postPlatform(req: Request, res: Response): Promise<void>{
    const body = req.body as Label;
 
    try{
        await platformRepository.insertPlatform(body.name);
        res.sendStatus(201);
        return
    } catch (err){
        res.sendStatus(500);
        return
    }
}