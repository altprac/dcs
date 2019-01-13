import weather from "../../lib/weather";

describe("testing weather module fails ", () => {
    test("500", (done) => {
        const cb = (error: Error | null, result?: object) => {
            expect(error).toHaveProperty("message");
            const errorDetals = error as Error;
            expect(errorDetals.message).toBe("500");
            done();
        };
        weather(cb, -37.8136, 144.9631);
    });
});
