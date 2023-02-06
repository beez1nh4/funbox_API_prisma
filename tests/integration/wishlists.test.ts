import { faker } from "@faker-js/faker";
import supertest from "supertest";
import prisma from "../../src/database/database";
import app from "../../src/index";
import { createGenre, createMovie, createPlatform, createUsername, createWish } from "../factories/names.factory";

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


describe("GET /wishlist/:username", () => {
  it("should respond with status 200 and empty list if there is no movies in the wishlist", async () => {
    await cleanDb();
    const username = await createUsername();
    const response = await server.get(`/wishlist/${username.name}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("should respond with status 200 and movie data if there are movies in the wishlist", async () => {

    const genre = await createGenre();
    const platform = await createPlatform();
    const movie = await createMovie(genre.id, platform.id)
    const username = await createUsername();
    const wish = await createWish(username.id, movie.id);

    const response = await server.get(`/wishlist/${username.name}`);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                username: username.name,
                movie: movie.name,
                genre: genre.name,
                platform: platform.name,
                comment: wish.comment,
                status: wish.status
            })
        ])
    )
  });
});


describe("POST /wishlist", () => {
    it("should respond with status 400 if send empty object", async () => {
      const response = await server.post("/wishlist").send({});
  
      expect(response.status).toBe(400);
    });
    
    it("should respond with status 404 if movie doesnt exist", async () => {
        const username = await createUsername();

        const response = await server.post("/wishlist").send({
            usernameId: username.id,
            movieId: 1
        });
    
        expect(response.status).toBe(404);
      });

      it("should respond with status 404 if username doesnt exist", async () => {
        const genre = await createGenre();
        const platform = await createPlatform();
        const movie = await createMovie(genre.id, platform.id);

        const response = await server.post("/wishlist").send({
            usernameId: 1,
            movieId: movie.id
        });
    
        expect(response.status).toBe(404);
      });

    it("should respond with status 201 if send correct object", async () => {
        const genre = await createGenre();
        const platform = await createPlatform();
        const movie = await createMovie(genre.id, platform.id);
        const username = await createUsername();

        const response = await server.post("/wishlist").send({
            usernameId: username.id,
            movieId: movie.id
        });
    
        expect(response.status).toBe(201);
      });
  });

describe("PUT /wishlist", () => {
    it("should respond with status 400 if send empty object", async () => {
      const response = await server.put("/wishlist").send({});
  
      expect(response.status).toBe(400);
    });

    it("should respond with status 200 if send correct object", async () => {
        const genre = await createGenre();
        const platform = await createPlatform();
        const movie = await createMovie(genre.id, platform.id);
        const username = await createUsername();
        const wish = await createWish(username.id, movie.id);

        const response = await server.put("/wishlist").send({
            id: wish.id,
            comment: 'so fun!'
        });
    
        expect(response.status).toBe(200);
      });
  });

  describe("DELETE /wishlist/:id", () => {

    it("should respond with status 200 if send correct object", async () => {
        const genre = await createGenre();
        const platform = await createPlatform();
        const movie = await createMovie(genre.id, platform.id);
        const username = await createUsername();
        const wish = await createWish(username.id, movie.id);

        const response = await server.delete(`/wishlist/${wish.id}`);
    
        expect(response.status).toBe(200);
      });
  });