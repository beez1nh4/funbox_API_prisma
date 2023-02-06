import platformRepository from "../repositories/platforms.repository";
import { Response } from "express";

export async function postOriginalPlatform(res: Response, name: string): Promise<void>{
    if (await platformRepository.platformExistsInDatabase(name) === false){
        await platformRepository.insertPlatform(name);
    } else {
        throw res.status(409).send({ message: "This platform alrealdy exists!" });
      }
    }

const platformService = {
    postOriginalPlatform
}

export default platformService;