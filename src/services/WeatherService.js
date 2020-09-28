import ApiService from './ApiService'

const URL = `https://api.openweathermap.org/data/2.5`

const generateUrl = (url) =>
    `${url}&units=metric&APPID=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`

export default {
    fetchToday(city) {
        return ApiService.get(generateUrl(`${URL}/weather?q=${city}`))
    },

    fetchForecast(city) {
        return ApiService.get(generateUrl(`${URL}/forecast?q=${city}`))
    },
}
