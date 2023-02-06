import prisma from "../database/database";
import { Wish, WishlistMovie } from "../schemas/movies.schemas";

async function findMoviesInWishListByUsername(username: string): Promise <WishlistMovie[]> {
    /* return connection.query(`
    SELECT "usersMovies".id, usernames.name AS "username", movies.name AS "movie", genres.name AS "genre", platforms.name AS "platform", "usersMovies".comment, "usersMovies".status 
    FROM "usersMovies" 
    JOIN usernames ON "usersMovies"."usernameId" = usernames.id 
    JOIN movies ON "usersMovies"."movieId" = movies.id
    JOIN genres ON movies."genreId" = genres.id
    JOIN platforms ON movies."platformId" = platforms.id
    WHERE usernames.name=$1;`,
        [username]
        ); */

    const wishlistArray = await prisma.usersMovies.findMany({
        where:{
            usernames: {
                name: username
            }
        },
        select: {
            id: true,
            movieId: true,
            comment: true,
            status: true,
            usernames: {
                select:{
                    name: true
                }     
            },
            movies:{
                select:{
                    name: true
                }
            }       
        }
    
    });
    let auxArray: WishlistMovie[] = [];
    await Promise.all (wishlistArray.map( async wish => {
        const wishlistObject = await getMovieInfo(wish)
        auxArray.push(wishlistObject)
    }
    ))
    return auxArray;
}

async function getMovieInfo(wish: Wish) {
    const movieInfo = await prisma.movies.findFirst({
        where:{
            id: wish.movieId
        },
        select:{
            genres:{
                select:{
                    name: true
                }
            },
            platforms:{
                select:{
                    name: true
                }
            }
        }
    })
    const wishlistObject = {
        id: wish.id,
        username: wish.usernames.name,
        movie: wish.movies.name,
        genre: movieInfo?.genres.name,
        platform: movieInfo?.platforms.name,
        comment: wish.comment,
        status: wish.status
    }
    return( wishlistObject)
    
}

async function insertMovieInWishList(usernameId: number, movieId: number): Promise<void> {
    
    await prisma.usersMovies.create({
        data:{
            usernameId,
            movieId
        }
    })
    return
}

async function changeStatusMovieInWishList(id: number, comment: string): Promise<void> {

    await prisma.usersMovies.update({
        where:{
            id
        },
        data:{
            status: 'seen',
            comment
        }
    })
    return
}

async function deleteMovieInWishList(id: number): Promise<void> {

    await prisma.usersMovies.delete({
        where:{
            id
        }
    })
    return
}

async function movieWishExistsInDatabase(usernameId: number, movieId: number): Promise <boolean> {
    let response: boolean = true
    const movieWishExists = await prisma.usersMovies.findFirst({
        where:{
            usernameId,
            movieId
        }
    })
    if (!movieWishExists){
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