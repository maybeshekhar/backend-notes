import express from "express";

import userRouter from "./routes/user.js";
import taskRouter from './routes/task.js';

import {config} from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors'


export const app = express();

config({
    path: "./data/config.env",
});


//using middleware 
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

//routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

//mongoose (database connection) shifted to database.js

app.get("/", (req,res) => {
    res.send("Nice Work")
})





