import { config } from "dotenv";

config(); // parse .env variables

const env_vars = {
  port: process.env.PORT,
};

export const { port } = env_vars;
