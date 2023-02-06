import genreRepository from "../repositories/genres.repository";
import { Response } from "express";

export async function postOriginalGenre(res: Response, name: string): Promise<void>{
    if (await genreRepository.genreExistsInDatabase(name) === false){
        await genreRepository.insertGenre(name);
    } else {
        throw res.status(409).send({ message: "This genre alrealdy exists!" });
      }
    }

const genreService = {
    postOriginalGenre
}

export default genreService;