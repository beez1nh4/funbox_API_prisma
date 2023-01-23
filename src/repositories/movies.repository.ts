import { QueryResult } from "pg";
import {connection} from "../database/database.js";
import { Movie } from "../schemas/movies.schemas.js";

async function findMovies(): Promise <QueryResult <Movie>> {
    return connection.query("SELECT * FROM movies;");
}

async function insertMovie(name:string, platformId: number, genreId: number): Promise<void> {
    await connection.query('INSERT INTO movies ("name", "platformId", "genreId") VALUES ($1, $2, $3);',
        [name, platformId, genreId]
        );
    return
}

const movieRepository = {
    findMovies,
    insertMovie
}

export default movieRepository;