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

async function usernameExistsInDatabase(name: string): Promise <boolean> {
    let response: boolean = true
    const usernameExists = await connection.query(
        'SELECT * FROM usernames WHERE name=$1;',
        [name]
    );
    if (!usernameExists.rows[0]){
        response = false;
    }
    return response
}

async function usernameIdExistsInDatabase(id: number): Promise <boolean> {
    let response: boolean = true
    const usernameIdExists = await connection.query(
        'SELECT * FROM usernames WHERE id=$1;',
        [id]
    );
    if (!usernameIdExists.rows[0]){
        response = false;
    }
    return response
}

const usernameRepository = {
    findUsernames,
    insertUsername,
    usernameExistsInDatabase,
    usernameIdExistsInDatabase
}

export default usernameRepository;