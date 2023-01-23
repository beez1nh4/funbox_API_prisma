CREATE DATABASE funbox_db;

CREATE TYPE "movieStatus" AS ENUM ('unseen', 'seen');

CREATE TABLE "genders" (
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
    "genderId" INTEGER NOT NULL REFERENCES "genders"("id"),
    "platformId" INTEGER NOT NULL REFERENCES "platforms"("id")
);

CREATE TABLE "usersMovies" (
	id SERIAL NOT NULL PRIMARY KEY,
	"usernameId" INTEGER NOT NULL UNIQUE REFERENCES usernames(id),
    "movieId" INTEGER NOT NULL UNIQUE REFERENCES movies(id),
	"comment" TEXT DEFAULT 'nothing to say',
    "status" "movieStatus" NOT NULL
);