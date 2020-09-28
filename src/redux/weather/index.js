import * as Types from './types'

const initState = {
    isLoading: false,
    weather: null,
    forecast: [],
    cityWeather: null,
    currentWeather: null,
}

export default function (state = initState, { type, payload }) {
    switch (type) {
        case Types.LOAD_WEATHER:
        case Types.LOAD_FORECAST:
        case Types.LOAD_CITY_WEATHER:
        case Types.LOAD_CURRENT_WEATHER:
            return {
                ...state,
                isLoading: true,
            }

        case Types.SUCCESSFULLY_LOAD_WEATHER:
            return {
                ...state,
                weather: payload,
                isLoading: false,
            }

        case Types.SUCCESSFULLY_LOAD_FORECAST:
            return {
                ...state,
                forecast: payload.list,
                isLoading: false,
            }

        case Types.SUCCESSFULLY_LOAD_CITY_WEATHER:
            return {
                ...state,
                cityWeather: payload,
                isLoading: false,
            }

        case Types.SUCCESSFULLY_LOAD_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: payload,
                isLoading: false,
            }

        case Types.ERROR_IN_LOAD_WEATHER:
        case Types.ERROR_IN_LOAD_FORECAST:
        case Types.ERROR_IN_LOAD_CITY_WEATHER:
        case Types.ERROR_IN_LOAD_CURRENT_WEATHER:
            return {
                ...state,
                isLoading: false,
            }

        default:
            return state
    }
}
