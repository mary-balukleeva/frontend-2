import * as Types from './types'
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

export const selectCity = (data) => (dispatch, getState, api) => {
    geocodeByAddress(data.description)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
            dispatch({
                type: Types.SELECT_CITY,
                payload: {
                    ...data,
                    coords: { lat, lng },
                },
            })
        })
}

export const addCity = () => ({
    type: Types.ADD_CITY,
})
