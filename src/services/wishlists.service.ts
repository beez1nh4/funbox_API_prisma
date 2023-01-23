import wishlistRepository from "../repositories/wishlists.repository.js";
import { Response } from "express";

export async function postOriginalWishlistMovie(res: Response, usernameId: number, platformId: number): Promise<void>{
    if (await wishlistRepository.movieWishExistsInDatabase(usernameId, platformId) === false){
        await wishlistRepository.insertMovieInWishList(usernameId, platformId);
    } else {
        throw res.status(409).send({ message: "This movie is alrealdy in this wishlist!" });
      }
    }

const wishlistService = {
    postOriginalWishlistMovie
}

export default wishlistService;