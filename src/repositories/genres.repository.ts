import { QueryResult } from "pg";
import {connection} from "../database/database.js";
import { Label } from "../schemas/label.schema.js";

async function findGenres(): Promise <QueryResult <Label>> {
    return connection.query("SELECT * FROM genres;");
}

async function insertGenre(name:string): Promise<void> {
    await connection.query('INSERT INTO genres ("name") VALUES ($1);',
        [name]
        );
    return
}

async function genreExistsInDatabase(name: string): Promise <boolean> {
    let response: boolean = true
    const genreExists = await connection.query(
        'SELECT * FROM genres WHERE name=$1;',
        [name]
    );
    if (!genreExists.rows[0]){
        response = false;
    }
    return response
}

async function genreIdExistsInDatabase(id: number): Promise <boolean> {
    let response: boolean = true
    const genreIdExists = await connection.query(
        'SELECT * FROM genres WHERE id=$1;',
        [id]
    );
    if (!genreIdExists.rows[0]){
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