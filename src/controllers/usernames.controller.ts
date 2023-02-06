import { Request, Response } from "express";
import usernameRepository from "../repositories/usernames.repository";
import { Label } from "../schemas/label.schema";
import usernameService from "../services/usernames.service";

export async function listAllUsernames(req: Request, res: Response): Promise<object> {
    const result = await usernameRepository.findUsernames();
    return res.send(result)
}

export async function postUsername(req: Request, res: Response): Promise<void>{
    const body = req.body as Label;
 
    try{
        await usernameService.postOriginalUsername(res, body.name);
        res.sendStatus(201);
        return
    } catch (err){
        res.sendStatus(400);
        return
    }
}