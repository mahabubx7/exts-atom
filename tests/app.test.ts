import http from "supertest";
import { app } from "../src/app";

describe("Testing express app", () => {
  it("should spin the server with HTTP:200", async () => {
    const response = await http(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  // depends on response changes at /
  it("should return json with HTTP:200 at /", async () => {
    const response = await http(app).get("/");
    expect(response.body).toStrictEqual({
      message: "Hello! 🐈 express-typescript!",
    });
  });
});
