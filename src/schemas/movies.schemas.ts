import Joi from "joi"

export type Movie = {
    id?: number,
    name: string,
    platformId: number,
    genreId: number
}

export const MovieSchema = Joi.object({
    name: Joi.string().required(),
    platformId: Joi.number().required(),
    genreId: Joi.number().required(),
})

export type UserMovie = {
    id?: number,
    usernameId: number,
    movieId: number,
    comment?: string,
    status?: string
}

export const UserMovieSchema = Joi.object({
    usernameId: Joi.number().required(),
    movieId: Joi.number().required()
})

export type UpdateUserMovie = {
    id: number,
    comment?: string,
}


export const UpdateUserMovieSchema = Joi.object({
    id: Joi.number().required(),
    comment: Joi.string()
})

export type WishlistMovie = {
    id: number,
    username: string,
    movie: string,
    genre: string | undefined,
    platform: string | undefined,
    comment: string | null,
    status: string
  }

export type QuantityMovie = {
    genre: string,
    numberOfMovies: number
  }

export type Wish = {
    id: number,
    movieId: number,
    comment: string | null,
    status: string,
    usernames: {
        name: string
    }     
    ,
    movies:{
        name: string
    }          
}

export type CountExample = {
    _count: number,
    genreId: number
  }

export type CountGenre = {
    genre: string | undefined,
    numberOfMovies: number
}