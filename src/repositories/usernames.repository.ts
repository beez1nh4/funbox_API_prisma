import { QueryResult } from "pg";
import {connection} from "../database/database.js";

async function findUsernames(): Promise <QueryResult <any>> {
    return connection.query("SELECT * FROM usernames;");
}

async function insertUsername(name:string): Promise<void> {
    await connection.query('INSERT INTO usernames ("name") VALUES ($1);',
        [name]
        );
    return
}

const usernameRepository = {
    findUsernames,
    insertUsername
}

export default usernameRepository;