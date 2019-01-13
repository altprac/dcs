import * as dotenv from "dotenv";
dotenv.config();
import weather from "../../lib/weather";

describe("testing weather module", () => {
    test("success", (done) => {
        const cb = (error: Error | null, result?: object) => {
            expect(result).toHaveProperty("high");
            done();
        };
        weather(cb, -37.8136, 144.9631);
    });
    test("invaid Lat", (done) => {
        const cb = (error: Error | null, result?: object) => {
            expect(error).toHaveProperty("message");
            const errorDetals = error as Error;
            expect(errorDetals.message).toBe("400");
            done();
        };
        weather(cb, -371.8136, 144.9631);
    });
    test("invaid Long", (done) => {
        const cb = (error: Error | null, result?: object) => {
            expect(error).toHaveProperty("message");
            const errorDetals = error as Error;
            expect(errorDetals.message).toBe("400");
            done();
        };
        weather(cb, -37.8136, 1441.9631);
    });
});
