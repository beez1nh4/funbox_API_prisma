import Joi from "joi"

export type Movie = {
    id?: number,
    name: string,
    platformId: number,
    genderId: number
}

export const MovieSchema = {
    name: Joi.string().required,
    platformId: Joi.number().required,
    genderId: Joi.number().required,
}

export type UserMovie = {
    id?: number,
    name: string,
    userId: number,
    movieId: number,
    comment: string,
    status: string
}

export const UserMovieSchema = {
    id: Joi.number().required,
    comment: Joi.string()
}