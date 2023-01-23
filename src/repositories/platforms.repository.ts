import { QueryResult } from "pg";
import {connection} from "../database/database.js";

async function findPlatforms(): Promise <QueryResult <any>> {
    return connection.query("SELECT * FROM platforms;");
}

async function insertPlatform(name:string): Promise<void> {
    await connection.query('INSERT INTO platforms ("name") VALUES ($1);',
        [name]
        );
    return
}

const platformRepository = {
    findPlatforms,
    insertPlatform
}

export default platformRepository;