import express from "express";
import dotenv from "dotenv";
import moviesRouter from "./routes/movies.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(moviesRouter);

app.listen(4000, () => console.log(`Server running in port: 4000`));