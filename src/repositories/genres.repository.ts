import { genres } from "@prisma/client";
import prisma from "../database/database.js";
import { Label } from "../schemas/label.schema.js";

async function findGenres(): Promise <genres[]> {
    return prisma.genres.findMany();
}

async function insertGenre(name:string): Promise<void> {
    await prisma.genres.create({
        data: {
            name
        }
    })
    return
}

async function genreExistsInDatabase(name: string): Promise <boolean> {
    let response: boolean = true
    const genreExists = await prisma.genres.findFirst({
        where: {
            name
        }
    })

    if (!genreExists){
        response = false;
    }
    return response
}

async function genreIdExistsInDatabase(id: number): Promise <boolean> {
    let response: boolean = true
    const genreIdExists = await prisma.genres.findFirst({
        where: {
            id
        }
    })

    if (!genreIdExists){
        response = false;
    }
    return response
}

const genreRepository = {
    findGenres,
    insertGenre,
    genreExistsInDatabase,
    genreIdExistsInDatabase
}


export default genreRepository;