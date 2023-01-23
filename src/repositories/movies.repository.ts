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

async function movieExistsInDatabase(name: string): Promise <boolean> {
    let response: boolean = true
    const movieExists = await connection.query(
        'SELECT * FROM movies WHERE name=$1;',
        [name]
    );
    if (!movieExists.rows[0]){
        response = false;
    }
    return response
}

const movieRepository = {
    findMovies,
    insertMovie,
    movieExistsInDatabase
}

export default movieRepository;