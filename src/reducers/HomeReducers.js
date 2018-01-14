import {
    GET_CURRENT_LOCATION,
    GET_INPUT,
    TOGGLE_SEARCH_RESULT,
    GET_ADDRESS_PREDICTIONS,
    GET_SELETED_ADDRESS,
    GET_DISTANCE_MATRIX,
    GET_FARE,
    GET_NEARBY_DRIVERS,
    BOOK_CAR,
    BOOKING_CONFIRMED
} from '../utils/ActionConstants'

const INITIAL_STATE = {
    region: {
        latitude: 12.914142,
        longitude: 74.855957,
        latitudeDelta: 0.09,
        longitudeDelta: 0.07
    },
    inputData: {},
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CURRENT_LOCATION:
            return { ...state, region: action.payload }

        case GET_INPUT:
            const { key, value } = action.payload
            return {
                ...state,
                inputData: { [key]: value }
            }

        case TOGGLE_SEARCH_RESULT:
            switch (action.payload) {
                case "pickUp":
                    return {
                        ...state,
                        resultTypes: {
                            pickUp: true, dropOff: false
                        },
                        predictions: {}
                    }
                case "dropOff":
                    return {
                        ...state,
                        resultTypes: {
                            pickUp: false, dropOff: true
                        },
                        predictions: {}
                    }
                default: return { ...state }
            }

        case GET_ADDRESS_PREDICTIONS:
            return { ...state, predictions: action.payload }

        case GET_SELETED_ADDRESS:
            let selectedTitle = state.resultTypes.pickUp ? "selectedPickUp" : "selectedDropOff"
            return {
                ...state,
                selectedAddress: {
                    ...state.selectedAddress,
                    [selectedTitle]: action.payload
                },
                resultTypes: {
                    pickUp: false, dropOff: false
                }
            }

        case GET_DISTANCE_MATRIX:
            return { ...state, distanceMatrix: action.payload }

        case GET_FARE:
            return { ...state, fare: action.payload }

        case GET_NEARBY_DRIVERS:
            return { ...state, nearByDrivers: action.payload }

        case BOOK_CAR:
            return { ...state, booking: action.payload }

        case BOOKING_CONFIRMED:
            return { ...state, booking: action.payload }

        default: return state
    }
}