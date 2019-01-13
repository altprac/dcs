import * as dotenv from "dotenv";
dotenv.config();
import * as request from "supertest";
import index from "../index";

describe("", () => {
    test("200 Request", (done) => {
        request(index)
        .get("/weather/37.8136/144.9631")
        .expect(200, done);
      });
    test("400 Request", (done) => {
        request(index)
        .get("/weather/a/123")
        .expect(400, done);
      });
});
