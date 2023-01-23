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

const genreRepository = {
    findGenres,
    insertGenre
}

export default genreRepository;