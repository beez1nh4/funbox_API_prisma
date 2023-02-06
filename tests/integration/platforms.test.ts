import { faker } from "@faker-js/faker";
import supertest from "supertest";
import prisma from "../../src/database/database";
import app from "../../src/index";
import { createPlatform } from "../factories/names.factory";

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

describe("GET /platforms", () => {
  it("should respond with status 200 and empty list if there is no platforms", async () => {
    const response = await server.get("/platforms");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("should respond with status 200 and platform data if there are platforms", async () => {
    const platform = await createPlatform();

    const response = await server.get("/platforms");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                id: platform.id,
                name: platform.name
            })
        ])
    )
  });
});

describe("POST /platforms", () => {
    it("should respond with status 400 if send empty object", async () => {
      const response = await server.post("/platforms").send({});
  
      expect(response.status).toBe(400);
    });
  
    it("should respond with status 201 if send correct object", async () => {
        const response = await server.post("/platforms").send({
            name: faker.name.firstName()
        });
    
        expect(response.status).toBe(201);
      });
  });