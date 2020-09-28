import * as Types from './types'

const initState = {
    city: null,
    isLoading: false,
}

export default function (state = initState, { type, payload }) {
    switch (type) {
        case Types.LOAD_USER_CITY:
            return {
                ...state,
                isLoading: true,
            }
        case Types.SUCCESSFULLY_LOAD_USER_CITY:
            return {
                ...state,
                city: payload,
                isLoading: false,
            }
        case Types.ERROR_IN_USER_CITY:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}
