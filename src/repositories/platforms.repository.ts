import { QueryResult } from "pg";
import {connection} from "../database/database.js";
import { Label } from "../schemas/label.schema.js";

async function findPlatforms(): Promise <QueryResult <Label>> {
    return connection.query("SELECT * FROM platforms;");
}

async function insertPlatform(name:string): Promise<void> {
    await connection.query('INSERT INTO platforms ("name") VALUES ($1);',
        [name]
        );
    return
}

async function platformExistsInDatabase(name: string): Promise <boolean> {
    let response: boolean = true
    const platformExists = await connection.query(
        'SELECT * FROM platforms WHERE name=$1;',
        [name]
    );
    if (!platformExists.rows[0]){
        response = false;
    }
    return response
}

const platformRepository = {
    findPlatforms,
    insertPlatform,
    platformExistsInDatabase
}

export default platformRepository;