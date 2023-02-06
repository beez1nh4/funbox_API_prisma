import wishlistRepository from "../repositories/wishlists.repository";
import { Response } from "express";
import usernameRepository from "../repositories/usernames.repository";
import movieRepository from "../repositories/movies.repository";

export async function postOriginalWishlistMovie(res: Response, usernameId: number, movieId: number): Promise<void>{

    if (await usernameRepository.usernameIdExistsInDatabase(usernameId)=== false){
        throw res.status(404).send({ message: "This username doesn't exist!" });
    }

    if (await movieRepository.movieIdExistsInDatabase(movieId)=== false){
        throw res.status(404).send({ message: "This movie doesn't exist!" });
    }

    if (await wishlistRepository.movieWishExistsInDatabase(usernameId, movieId) === false){
        await wishlistRepository.insertMovieInWishList(usernameId, movieId);
    } else {
        throw res.status(409).send({ message: "This movie is alrealdy in this wishlist!" });
      }
    }

const wishlistService = {
    postOriginalWishlistMovie
}

export default wishlistService;