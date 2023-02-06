import { Request, Response, NextFunction } from "express";
import { UpdateUserMovie, UpdateUserMovieSchema, UserMovie, UserMovieSchema } from "../schemas/movies.schemas";

export async function wishlistBodyValidation(req: Request, res: Response, next: NextFunction){
    const label = req.body as UserMovie;
    const { error } = UserMovieSchema.validate(label, { abortEarly: false });

    if (error) {
        return res.status(400).send({
          message: error.message
        });
      }
    next()
}

export async function updateBodyValidation(req: Request, res: Response, next: NextFunction){
    const label = req.body as UpdateUserMovie;
    const { error } = UpdateUserMovieSchema.validate(label, { abortEarly: false });

    if (error) {
        return res.status(400).send({
          message: error.message
        });
      }
    next()
}
