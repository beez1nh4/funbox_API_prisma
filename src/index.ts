import express from "express";
import dotenv from "dotenv";
import moviesRouter from "./routes/movies.route";
import genresRouter from "./routes/genres.route";
import platformsRouter from "./routes/platforms.route"
import usernamesRouter from "./routes/usernames.route";
import wishlistRouter from "./routes/wishlists.route";

dotenv.config();

const app = express();
app.use(express.json());
app.use(moviesRouter);
app.use(genresRouter);
app.use(platformsRouter);
app.use(usernamesRouter);
app.use(wishlistRouter);


export default app;