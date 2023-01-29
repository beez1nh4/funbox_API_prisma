import { Request, Response } from "express";
import platformRepository from "../repositories/platforms.repository.js";
import { Label } from "../schemas/label.schema.js";
import platformService from "../services/platforms.service.js";

export async function listAllPlatforms(req: Request, res: Response): Promise<object> {
    const result = await platformRepository.findPlatforms();
    return res.send(result)
}

export async function postPlatform(req: Request, res: Response): Promise<void>{
    const body = req.body as Label;
 
    try{
        await platformService.postOriginalPlatform(res, body.name);
        res.sendStatus(201);
        return
    } catch (err){
        return
    }
}