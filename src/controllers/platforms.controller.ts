import { Request, Response } from "express";
import platformRepository from "../repositories/platforms.repository";
import { Label } from "../schemas/label.schema";
import platformService from "../services/platforms.service";

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
        res.sendStatus(400);
        return
    }
}