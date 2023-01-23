import Joi from "joi"

export type Movie = {
    id?: number,
    name: string,
    platformId: number,
    genreId: number
}

export const MovieSchema = {
    name: Joi.string().required(),
    platformId: Joi.number().required(),
    genreId: Joi.number().required(),
}

export type UserMovie = {
    id?: number,
    usernameId: number,
    movieId: number,
    comment?: string,
    status?: string
}

export const UserMovieSchema = {
    usernameId: Joi.number().required(),
    movieId: Joi.number().required()
}

export type UpdateUserMovie = {
    id: number,
    comment?: string,
}


export const UpdateUserMovieSchema = {
    id: Joi.number().required(),
    comment: Joi.string()
}

export type WishlistMovie = {
    id: number,
    username: string,
    movie: string,
    genre: string,
    platform: string,
    comment: string,
    status: string
  }