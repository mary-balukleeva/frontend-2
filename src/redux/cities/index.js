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
            return {
                ...state,
                cities: [...state.cities, state.selectedCity],
            }

        default:
            return state
    }
}
