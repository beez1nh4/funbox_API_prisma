import express from "express";
import dotenv from "dotenv";
import moviesRouter from "./routes/movies.route.js";
import genresRouter from "./routes/genres.route.js";
import platformsRouter from "./routes/platforms.route.js"
import usernamesRouter from "./routes/usernames.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(moviesRouter);
app.use(genresRouter);
app.use(platformsRouter);
app.use(usernamesRouter);

app.listen(4000, () => console.log(`Server running in port: 4000`));