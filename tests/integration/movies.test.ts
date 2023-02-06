import { faker } from "@faker-js/faker";
import supertest from "supertest";
import prisma from "../../src/database/database";
import app from "../../src/index";
import { createGenre, createMovie, createPlatform, createUsername } from "../factories/names.factory";

async function cleanDb() {
  await prisma.usersMovies.deleteMany({});
  await prisma.movies.deleteMany({});
  await prisma.genres.deleteMany({});
  await prisma.platforms.deleteMany({});
  await prisma.usernames.deleteMany({});
}
beforeAll(async () => {
  await cleanDb();
});

const server = supertest(app);

describe("GET /moviesquantitybygenre", () => {
    it("should respond with status 200 and empty list if there is no movies", async () => {
      const response = await server.get("/moviesquantitybygenre");
  
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  
    it("should respond with status 200 and movie data if there are movies", async () => {
      const genre = await createGenre();
      const platform = await createPlatform();
      const movie = await createMovie(genre.id, platform.id);
  
      const response = await server.get("/moviesquantitybygenre");
  
      expect(response.status).toBe(200);
      expect(response.body).toEqual([{
                  genre: genre.name,
                  numberOfMovies: 1
              }])
    });
  });

describe("GET /movies", () => {
  it("should respond with status 200 and empty list if there is no movies", async () => {
    await cleanDb();
    const response = await server.get("/movies");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("should respond with status 200 and movie data if there are movies", async () => {

    const genre = await createGenre();
    const platform = await createPlatform();
    const movie = await createMovie(genre.id, platform.id)

    const response = await server.get("/movies");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                id: movie.id,
                name: movie.name,
                genreId: movie.genreId,
                platformId: movie.platformId
            })
        ])
    )
  });
});


describe("POST /movies", () => {
    it("should respond with status 400 if send empty object", async () => {
      const response = await server.post("/movies").send({});
  
      expect(response.status).toBe(400);
    });
    
    it("should respond with status 404 if genre doesnt exist", async () => {
        const platform = await createPlatform();

        const response = await server.post("/movies").send({
            name: faker.name.firstName(),
            genreId: 1,
            platformId: platform.id
        });
    
        expect(response.status).toBe(404);
      });

      it("should respond with status 404 if platform doesnt exist", async () => {
        const genre = await createGenre();

        const response = await server.post("/movies").send({
            name: faker.name.firstName(),
            genreId: genre.id,
            platformId: 1
        });
    
        expect(response.status).toBe(404);
      });

    it("should respond with status 201 if send correct object", async () => {
        const genre = await createGenre();
        const platform = await createPlatform();

        const response = await server.post("/movies").send({
            name: faker.name.firstName(),
            genreId: genre.id,
            platformId: platform.id
        });
    
        expect(response.status).toBe(201);
      });
  });