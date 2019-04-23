const request = require('request')



const forecast = (lat, lng, callback) => {

    const url = "https://api.darksky.net/forecast/056af34d07e97774307825b3b086be64/" + lat + "," + lng + "?units=si"
    request({ url, json: true }, (error, { body }) => {
        console.log(body.daily.data[0])
        if (error) {
            callback("Unable to connect to weather service", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain. The max temperature is ${body.daily.data[0].temperatureHigh} degrees celcius. The min temperature is  ${body.daily.data[0].temperatureLow} degrees celcius. `)
        }
    })
}

module.exports = forecast