import prisma from "../../src/database/database"
import {faker} from "@faker-js/faker"

export async function createGenre(){
    return prisma.genres.create({
        data: {
            name: faker.name.firstName()
        }
    })
    
}

export async function createPlatform() {
    return prisma.platforms.create({
        data: {
            name: faker.name.firstName()
        }
    })
    
}

export async function createUsername() {
    return prisma.usernames.create({
        data: {
            name: faker.name.firstName()
        }
    })
    
}

export async function createMovie(genreId: number, platformId: number) {
    return prisma.movies.create({
        data: {
            name: faker.name.firstName(),
            genreId,
            platformId
        }
    })
    
}

export async function createWish(usernameId: number, movieId: number) {
    return prisma.usersMovies.create({
        data: {
            usernameId,
            movieId
        }
    })
    
}