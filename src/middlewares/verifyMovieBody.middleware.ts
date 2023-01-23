import { Request, Response, NextFunction } from "express";
import { Movie, MovieSchema } from "../schemas/movies.schemas.js";

export async function movieBodyValidation(req: Request, res: Response, next: NextFunction){
    const label = req.body as Movie;
    const { error } = MovieSchema.validate(label, { abortEarly: false });

    if (error) {
        return res.status(400).send({
          message: error.message
        });
      }
    next()
}