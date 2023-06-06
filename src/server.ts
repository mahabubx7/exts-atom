import express, { Express } from "express";
import { router } from "./router";

const server: Express = express(); // express server-app instance

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(router); // route handling

const port = process.env.PORT || 4000;

server.listen(port, () =>
  console.log(`🚀 EX-TS is running at http://localhost:${port}`)
);
