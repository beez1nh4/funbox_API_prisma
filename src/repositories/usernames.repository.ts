import { usernames } from "@prisma/client";
import prisma from "../database/database.js";
import { Label } from "../schemas/label.schema.js";

async function findUsernames(): Promise <usernames[]> {
    return prisma.usernames.findMany()
}

async function insertUsername(name:string): Promise<void> {
    await prisma.usernames.create({
        data: {
            name
        }
    })
    return
}

async function usernameExistsInDatabase(name: string): Promise <boolean> {
    let response: boolean = true
    const usernameExists = await prisma.usernames.findFirst({
        where:{
            name
        }
    })
    if (!usernameExists){
        response = false;
    }
    return response
}

async function usernameIdExistsInDatabase(id: number): Promise <boolean> {
    let response: boolean = true
    const usernameIdExists = await prisma.usernames.findFirst({
        where:{
            id
        }
    })
    if (!usernameIdExists){
        response = false;
    }
    return response
}

const usernameRepository = {
    findUsernames,
    insertUsername,
    usernameExistsInDatabase,
    usernameIdExistsInDatabase
}

export default usernameRepository;