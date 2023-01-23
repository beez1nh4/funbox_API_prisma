import usernameRepository from "../repositories/usernames.repository.js";
import { Response } from "express";

export async function postOriginalUsername(res: Response, name: string): Promise<void>{
    if (await usernameRepository.usernameExistsInDatabase(name) === false){
        await usernameRepository.insertUsername(name);
    } else {
        throw res.status(409).send({ message: "This username alrealdy exists!" });
      }
    }

const usernameService = {
    postOriginalUsername
}

export default usernameService;