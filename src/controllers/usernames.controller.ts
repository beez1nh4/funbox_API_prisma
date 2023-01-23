import { Request, Response } from "express";
import usernameRepository from "../repositories/usernames.repository.js";
import { Label } from "../schemas/label.schema.js";

export async function listAllUsernames(req: Request, res: Response): Promise<object> {
    const result = await usernameRepository.findUsernames();
    return res.send(result.rows)
}

export async function postUsername(req: Request, res: Response): Promise<void>{
    const body = req.body as Label;
 
    try{
        await usernameRepository.insertUsername(body.name);
        res.sendStatus(201);
        return
    } catch (err){
        res.sendStatus(500);
        return
    }
}