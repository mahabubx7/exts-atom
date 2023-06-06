import express, { Express } from "express";
import { router } from "./router";

export const app: Express = express(); // express server-app instance

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router); // route handling
