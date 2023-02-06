import { platforms } from "@prisma/client";
import prisma from "../database/database";

async function findPlatforms(): Promise <platforms[]> {
    return prisma.platforms.findMany();
}

async function insertPlatform(name:string): Promise<void> {
    await prisma.platforms.create({
        data: {
            name
        }
    })
    return
}

async function platformExistsInDatabase(name: string): Promise <boolean> {
    let response: boolean = true
    const platformExists = await prisma.platforms.findFirst({
        where:{
            name
        }
    })
    if (!platformExists){
        response = false;
    }
    return response
}

async function platformIdExistsInDatabase(id: number): Promise <boolean> {
    let response: boolean = true
    const platformIdExists = await prisma.platforms.findFirst({
        where: {
            id
        }
    })
    if (!platformIdExists){
        response = false;
    }
    return response
}

const platformRepository = {
    findPlatforms,
    insertPlatform,
    platformExistsInDatabase,
    platformIdExistsInDatabase
}

export default platformRepository;