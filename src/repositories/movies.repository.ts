import { movies } from "@prisma/client";
import { QueryResult } from "pg";
import prisma from "../database/database.js";
import { CountExample, CountGenre, Movie, QuantityMovie } from "../schemas/movies.schemas.js";

async function findMovies(): Promise <movies[]> {
    return prisma.movies.findMany();
}

async function insertMovie(name:string, platformId: number, genreId: number): Promise<void> {
    await prisma.movies.create({
        data:{
            name,
            platformId,
            genreId
        }
    })
    return
}

async function movieExistsInDatabase(name: string): Promise <boolean> {
    let response: boolean = true
    const movieExists = await prisma.movies.findFirst({
        where:{
            name
        }
    })
    if (!movieExists){
        response = false;
    }
    return response
}

async function movieIdExistsInDatabase(id: number): Promise <boolean> {
    let response: boolean = true
    const movieIdExists = await prisma.movies.findFirst({
        where:{
            id
        }
    })
    if (!movieIdExists){
        response = false;
    }
    return response
}

async function findQuantityOfMoviesByGenre(): Promise <CountGenre[]> {
/*     return connection.query(`
    SELECT genres.name AS "genre", 
    COALESCE(COUNT(movies."genreId"),0) AS "numberOfMovies" 
    FROM genres 
    LEFT JOIN movies ON genres.id = movies."genreId" 
    GROUP BY genres.id;`); */
    const quantityArray = await prisma.movies.groupBy({
    by: ["genreId"],
    _count: true
    })
    let auxArray: CountGenre[] = []
    await Promise.all (quantityArray.map(async quantityItem => {
        const quantityObject = await getGenreName(quantityItem)
        auxArray.push(quantityObject)
    } ))
    return auxArray
}
async function getGenreName(quantityItem: CountExample){
    const genre = await prisma.genres.findFirst({
        where:{
            id: quantityItem.genreId
        }
    })
    return {
        genre: genre?.name,
        numberOfMovies: quantityItem._count
    }
}
const movieRepository = {
    findMovies,
    insertMovie,
    movieExistsInDatabase,
    movieIdExistsInDatabase,
    findQuantityOfMoviesByGenre
}

export default movieRepository;