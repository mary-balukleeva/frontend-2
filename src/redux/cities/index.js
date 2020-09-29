import * as Types from './types'

const initState = {
    selectedCity: null,
    cities: [],
}

export default function (state = initState, { type, payload }) {
    switch (type) {
        case Types.SELECT_CITY:
            return {
                ...state,
                selectedCity: payload
            }

        case Types.ADD_CITY:
            const city = state.cities.find(item => item.placeId === state.selectedCity.placeId)

            return {
                ...state,
                cities: city ? state.cities : [...state.cities, state.selectedCity]
            }

        default:
            return state
    }
}
