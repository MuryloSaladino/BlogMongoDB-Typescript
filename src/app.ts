import express from "express";
import "reflect-metadata"
import "dotenv/config"
import postRoutes from "./routes/post.routes";

const app = express();

app.use(express.json())

app.use(postRoutes)

export default app;