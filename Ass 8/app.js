import dotenv from "dotenv";
dotenv.config();

import express from "express";

import * as indexRouter from "./index.router.js";

import connect from './DB/connectionDB.js'

const app = express();

const port = process.env.port;

app.use(express.json());

const baseUrl = process.env.baseUrl;
app.use(`${baseUrl}/auth`, indexRouter.routerForAuth);
app.use(`${baseUrl}/user`, indexRouter.routerForUser);
app.use(`${baseUrl}/note`, indexRouter.routerForNote);

connect();

app.listen(port, () => {
  console.log(" App run on port " + port);
});
