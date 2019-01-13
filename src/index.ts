import * as express from "express";
import weather from "./lib/weather";
const PORT = process.env.PORT;
const app = express();

const response = (res: any) => {
    return (error: Error | null, result?: object) => {
        if (error) {
            res.sendStatus(error.message);
        } else {
            res.send(result);
        }
    };
};

app.get("/weather/:latitude/:longitude", (req, res) => {
    const cb = response(res);
    const {latitude, longitude} = req.params;
    const temperatures = weather(cb, latitude, longitude);
});

app.listen(PORT);

export default app;
