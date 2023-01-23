import { QueryResult } from "pg";
import {connection} from "../database/database.js";
import { Label } from "../schemas/label.schema.js";

async function findUsernames(): Promise <QueryResult <Label>> {
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