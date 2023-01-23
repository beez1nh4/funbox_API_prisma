import { QueryResult } from "pg";
import {connection} from "../database/database.js";
import { WishlistMovie } from "../schemas/movies.schemas.js";

async function findMoviesInWishListByUsername(username: string): Promise <QueryResult <WishlistMovie>> {
    return connection.query(`
    SELECT "usersMovies".id, usernames.name AS "username", movies.name AS "movie", genres.name AS "genre", platforms.name AS "platform", "usersMovies".comment, "usersMovies".status 
    FROM "usersMovies" 
    JOIN usernames ON "usersMovies"."usernameId" = usernames.id 
    JOIN movies ON "usersMovies"."movieId" = movies.id
    JOIN genres ON movies."genreId" = genres.id
    JOIN platforms ON movies."platformId" = platforms.id
    WHERE usernames.name=$1;`,
        [username]
        );
}

async function insertMovieInWishList(usernameId: number, movieId: number): Promise<void> {
    await connection.query('INSERT INTO "usersMovies" ("usernameId", "movieId") VALUES ($1, $2);',
        [usernameId, movieId]
        );
    return
}

async function changeStatusMovieInWishList(id: number, comment: string): Promise<void> {

    await connection.query('UPDATE "usersMovies" SET "status"=$1, comment=$2 WHERE id=$3;',
        ['seen', comment, id]
        );
    return
}

async function deleteMovieInWishList(id: number): Promise<void> {

    await connection.query('DELETE FROM "usersMovies" WHERE id=$1;',
        [id]
        );
    return
}

async function movieWishExistsInDatabase(usernameId: number, movieId: number): Promise <boolean> {
    let response: boolean = true
    const movieWishExists = await connection.query(
        'SELECT * FROM "usersMovies" WHERE "usernameId"=$1 AND "movieId"=$2;',
        [usernameId, movieId]
    );
    if (!movieWishExists.rows[0]){
        response = false;
    }
    return response
}

const wishlistRepository = {
    findMoviesInWishListByUsername,
    insertMovieInWishList,
    changeStatusMovieInWishList,
    deleteMovieInWishList,
    movieWishExistsInDatabase
}

export default wishlistRepository;