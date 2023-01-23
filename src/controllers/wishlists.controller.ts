import { Request, Response } from "express";
import wishlistRepository from "../repositories/wishlists.repository.js";
import { UpdateUserMovie, UserMovie } from "../schemas/movies.schemas.js";
import wishlistService from "../services/wishlists.service.js";

export async function listWishlistByUsername(req: Request, res: Response): (Promise<object | void>) {
    const params = req.params;

    try{
    const result = await wishlistRepository.findMoviesInWishListByUsername(params.username);
    return res.send(result.rows)
    } catch (err){
        res.sendStatus(500);
        return
    }
}

export async function postMovieInWishlist(req: Request, res: Response): Promise<void>{
    const body = req.body as UserMovie;
 
    try{
        await wishlistService.postOriginalWishlistMovie(res, body.usernameId, body.movieId);
        res.sendStatus(201);
        return
    } catch (err){
        return
    }
}

export async function updateMovieInWishlist(req: Request, res: Response): Promise<void>{
    const body = req.body as UpdateUserMovie;

    let comment: string = 'nothing to say'

    if (body.comment){
        comment = body.comment
    }
 
    try{
        await wishlistRepository.changeStatusMovieInWishList(body.id, comment);
        res.sendStatus(200);
        return
    } catch (err){
        res.sendStatus(500);
        return
    }
}

export async function deleteMovieInWishListById(req: Request, res: Response): Promise<void> {
    const params = req.params;

    try{
        await wishlistRepository.deleteMovieInWishList(Number(params.id));
        res.sendStatus(200)
    } catch (err){
        res.sendStatus(500);
        return
    }
}