import { faker } from "@faker-js/faker";
import supertest from "supertest";
import prisma from "../../src/database/database";
import app from "../../src/index";
import { createUsername } from "../factories/names.factory";

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

describe("GET /usernames", () => {
  it("should respond with status 200 and empty list if there is no usernames", async () => {
    const response = await server.get("/usernames");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("should respond with status 200 and genre data if there are usernames", async () => {
    const username = await createUsername();

    const response = await server.get("/usernames");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                id: username.id,
                name: username.name
            })
        ])
    )
  });
});

describe("POST /usernames", () => {
    it("should respond with status 400 if send empty object", async () => {
      const response = await server.post("/usernames").send({});
  
      expect(response.status).toBe(400);
    });
  
    it("should respond with status 400 if send correct object", async () => {
        const response = await server.post("/usernames").send({
            name: faker.name.firstName()
        });
    
        expect(response.status).toBe(201);
      });
  });