import * as request from "request";

const uri = `https://api.darksky.net/forecast/${process.env.WEATHER_KEY}/`;

const checkLat = (lat: number) => isNaN(lat) || lat > 90 || lat < -90 ? false : true;

const checkLong = (long: number) => isNaN(long) || long > 180 || long < -180 ? false : true;

const weather = (cb: ICb, latitude: number, longitude: number): void => {
    const requestUri = `${uri}${latitude},${longitude}?exclude=currently,minutely,hourly,alerts,flags&units=si`;
    if (!checkLat(latitude) || !checkLong(longitude)) {
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
