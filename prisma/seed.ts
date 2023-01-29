import prisma from "../src/database/database.js";

async function main() {
    await prisma.genres.createMany({
        data: [
            { name: "drama" },
            { name: "horror" },
            { name: "romance" },
            { name: "action" },
            { name: "mistery" },
            { name: "comedy" },
            { name: "documentary" },
          ]
    })

    await prisma.platforms.createMany({
        data: [
            { name: "netflix" },
            { name: "youtube" },
            { name: "amazon prime" }
          ]
    })

    await prisma.usernames.createMany({
        data: [
            { name: "mel" },
            { name: "pedro" }
          ]
    })

    await prisma.movies.createMany({
        data:[
            {name: 'Too All The Boys I Loved Before',
            genreId: 3,
            platformId: 1},
            {name: 'Superbad',
            genreId: 6,
            platformId: 1},
            {name: 'Mean Girls',
            genreId: 6,
            platformId: 2},
            {name: 'It',
            genreId: 2,
            platformId: 1},
            {name: '16 wishes',
            genreId: 6,
            platformId: 3}
        ]
    })

    await prisma.usersMovies.createMany({
        data:[
            {usernameId: 1,
            movieId: 1,
            },
            {usernameId: 1,
                movieId: 2,
            },
            {usernameId: 2,
                movieId: 3,
            },
            {usernameId: 2,
                movieId: 1,
            },
            {usernameId: 1,
                movieId: 5,
            }
        ]
    })
}


main().then(() => {
    console.log("Registros feitos!")
}).catch( (e) =>{
    console.error(e);
    process.exit(1)
}).finally( async() => {
    await prisma.$disconnect()
})