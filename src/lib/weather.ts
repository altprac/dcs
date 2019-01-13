import * as request from "request";

const uri = `https://api.darksky.net/forecast/${process.env.WEATHER_KEY}/`;

const checkCoords = (coOrd: number, deg: number) => isNaN(coOrd) || coOrd > deg || coOrd < -deg ? false : true;

const weather = (cb: ICb, latitude: number, longitude: number): void => {
    const requestUri = `${uri}${latitude},${longitude}?exclude=currently,minutely,hourly,alerts,flags&units=si`;
    if (!checkCoords(latitude, 90) || !checkCoords(longitude, 180)) {
        cb(new Error("400"));
        return;
    }
    request(requestUri , (error, response, body) => {
        if (response.statusCode === 200) {
            const data = JSON.parse(body);
            const today = data.daily.data[0];
            const {temperatureMax, temperatureMin} = today;
            cb(null , {high: temperatureMax, low: temperatureMin});
        } else {
            cb(new Error("500"));
        }
        return;
    });
};

export default weather;
