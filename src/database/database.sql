CREATE DATABASE funbox_db;

CREATE TYPE "movieStatus" AS ENUM ('unseen', 'seen');

CREATE TABLE "genres" (
	"id" serial PRIMARY KEY,
	"name" TEXT UNIQUE NOT NULL
);

CREATE TABLE "platforms" (
	"id" serial PRIMARY KEY,
	"name" TEXT UNIQUE NOT NULL
);

CREATE TABLE "usernames" (
	"id" serial PRIMARY KEY,
	"name" TEXT UNIQUE NOT NULL,
    "createdAt"  DATE NOT NULL DEFAULT NOW()
);

CREATE TABLE "movies" (
	"id" serial PRIMARY KEY,
    "name" TEXT UNIQUE NOT NULL,
    "genreId" INTEGER NOT NULL REFERENCES "genres"("id"),
    "platformId" INTEGER NOT NULL REFERENCES "platforms"("id")
);

CREATE TABLE "usersMovies" (
	id SERIAL NOT NULL PRIMARY KEY,
	"usernameId" INTEGER NOT NULL REFERENCES "usernames"(id),
    "movieId" INTEGER NOT NULL REFERENCES "movies"(id),
	"comment" TEXT DEFAULT 'nothing to say',
    "status" "movieStatus" NOT NULL DEFAULT 'unseen'
);