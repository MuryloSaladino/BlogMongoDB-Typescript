import express from "express";
import "reflect-metadata"
import "dotenv/config"
import postRoutes from "./routes/post.routes";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(express.json())

app.use(postRoutes)
app.use(userRoutes)

export default app;