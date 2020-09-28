import * as Types from './types'

export const loadWeather = (city) => (dispatch, getState, api) => {
    dispatch({
        type: Types.LOAD_WEATHER,
    })

    return api.weather
        .fetchToday(city)
        .then((payload) => {
            dispatch({
                type: Types.SUCCESSFULLY_LOAD_WEATHER,
                payload,
            })
        })
        .catch((err) => {
            dispatch({
                type: Types.ERROR_IN_LOAD_WEATHER,
                payload: err,
            })
        })
}

export const loadForecast = (city) => (dispatch, getState, api) => {
    dispatch({
        type: Types.LOAD_FORECAST,
    })

    return api.weather
        .fetchForecast(city)
        .then((payload) => {
            dispatch({
                type: Types.SUCCESSFULLY_LOAD_FORECAST,
                payload,
            })
        })
        .catch((err) => {
            dispatch({
                type: Types.ERROR_IN_LOAD_FORECAST,
                payload: err,
            })
        })
}

export const loadCityWeather = (city) => (dispatch, getState, api) => {
    dispatch({
        type: Types.LOAD_CITY_WEATHER,
    })

    return api.weather
        .fetchToday(city)
        .then((payload) => {
            dispatch({
                type: Types.SUCCESSFULLY_LOAD_CITY_WEATHER,
                payload,
            })
        })
        .catch((err) => {
            dispatch({
                type: Types.ERROR_IN_LOAD_CITY_WEATHER,
                payload: err,
            })
        })
}

export const loadCurrentWeather = (city) => (dispatch, getState, api) => {
    dispatch({
        type: Types.LOAD_CURRENT_WEATHER,
    })

    return api.weather
        .fetchToday(city)
        .then((payload) => {
            dispatch({
                type: Types.SUCCESSFULLY_LOAD_CURRENT_WEATHER,
                payload,
            })
        })
        .catch((err) => {
            dispatch({
                type: Types.ERROR_IN_LOAD_CURRENT_WEATHER,
                payload: err,
            })
        })
}
