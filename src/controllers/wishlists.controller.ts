import { Request, Response } from "express";
import wishlistRepository from "../repositories/wishlists.repository";
import { UpdateUserMovie, UserMovie, WishlistMovie } from "../schemas/movies.schemas";
import wishlistService from "../services/wishlists.service";

export async function listWishlistByUsername(req: Request<{ username: string}>, res: Response): (Promise<object | void>) {
    const params = req.params;

    try{
    const result = await wishlistRepository.findMoviesInWishListByUsername(params.username);
    return res.send(result)
    } catch (err){
        res.sendStatus(400);
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
        res.sendStatus(400);
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
        res.sendStatus(400);
        return
    }
}

export async function deleteMovieInWishListById(req: Request<{ id: string}>, res: Response): Promise<void> {
    const params = req.params;

    try{
        await wishlistRepository.deleteMovieInWishList(Number(params.id));
        res.sendStatus(200)
    } catch (err){
        res.sendStatus(500);
        return
    }
}