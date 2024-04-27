import express from "express";
import cors from "cors";

const data = "1mb";

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use(express.json({limit: data}));
app.use(express.urlencoded({extended: true, limit: data}));
app.use(express.static("public"));

//Import Router
import todoRoute from "./routes/todo.route.js"

//Router declaration
app.use("/api/v1/", todoRoute);
export default app;