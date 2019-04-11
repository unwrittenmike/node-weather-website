const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidW53cml0dGVubWlrZSIsImEiOiJjanR5N2NhbTAyOWY5NDRxbmFtbWd4N2VuIn0.TW-ZzIRWhwL1CuIMf6iicw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to geocoding service', undefined)
        } else if (body.features.length === 0) {
            callback('Please enter a valid location', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode