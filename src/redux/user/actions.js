import * as Types from './types'

export const detectUserCity = (coords) => (dispatch, getState, api) => {
    dispatch({
        type: Types.LOAD_USER_CITY,
    })

    return api.user
        .fetchUserLocation(coords)
        .then((response) => {
            dispatch({
                type: Types.SUCCESSFULLY_LOAD_USER_CITY,
                payload: response.results[0],
            })
        })
        .catch((err) => {
            dispatch({
                type: Types.ERROR_IN_USER_CITY,
                payload: err,
            })
        })
}
