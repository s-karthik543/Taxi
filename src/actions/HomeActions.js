import {
    GET_CURRENT_LOCATION,
    GET_INPUT,
    TOGGLE_SEARCH_RESULT,
    GET_ADDRESS_PREDICTIONS,
    GET_SELETED_ADDRESS,
    GET_DISTANCE_MATRIX,
    GET_FARE,
    BOOK_CAR,
    GET_NEARBY_DRIVERS
} from '../utils/ActionConstants'
import RNGooglePlaces from 'react-native-google-places'
import calculateFare from '../utils/FareCalculaor'

/**
 * Get current user location
 */
export const getCurrentLocation = () => {
    return (dispatch) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {

                let region = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.07
                }
                dispatch({
                    type: GET_CURRENT_LOCATION,
                    payload: region
                });
            },
            (error) => {
                console.log("Error ", error.message)
            },
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
        )
    }
}

//GET USER INPUT
export const getInputData = (payload) => {
    return {
        type: GET_INPUT,
        payload: payload
    }
}

//toggle search result model
export const toggleSearchResultModal = (payload) => {
    console.log(payload)
    return {
        type: TOGGLE_SEARCH_RESULT,
        payload: payload
    }
}

/**
 * Get addresses from google places
 */
export const getAddressPredictions = () => {
    return (dispatch, store) => {

        let userInput = store().home.resultTypes.pickUp ? store().home.inputData.pickUp : store().home.inputData.dropOff

        RNGooglePlaces.getAutocompletePredictions(userInput, { country: 'IN' })
            .then((results) => {
                dispatch({
                    type: GET_ADDRESS_PREDICTIONS,
                    payload: results
                })
            })
            .catch((error) => console.log(error.message))
    }
}

/**
 * Get selected address
 */
export const getSelectedAddress = (payload) => {
    const dummyNumbers = {
        baseFare: 0.4,
        timeRate: 0.14,
        distanceRate: 0.97,
        surge: 1
    }
    return (dispatch, store) => {
        RNGooglePlaces.lookUpPlaceByID(payload)
            .then((results) => {
                dispatch({
                    type: GET_SELETED_ADDRESS,
                    payload: results
                })
            })
            .then(() => {
                //Get the distance and time
                if (store().home.selectedAddress.selectedPickUp && store().home.selectedAddress.selectedDropOff) {

                    let url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${store().home.selectedAddress.selectedPickUp.latitude},${store().home.selectedAddress.selectedPickUp.longitude}&destinations=${store().home.selectedAddress.selectedDropOff.latitude},${store().home.selectedAddress.selectedDropOff.longitude}&mode=driving&key=AIzaSyA6N-wlu9o1oaxEQoD8QCsevlQB1Kw4w-Q`
                    console.log("Url ", url)
                    fetch(url)
                        .then((response) => response.json())
                        .then((responseJson) => {
                            dispatch({
                                type: GET_DISTANCE_MATRIX,
                                payload: responseJson
                            });
                        })
                        .catch((error) => {
                            console.log("Error ", error.message)
                        })
                }

                setTimeout(() => {
                    if (store().home.selectedAddress.selectedPickUp && store().home.selectedAddress.selectedDropOff) {
                        const fare = calculateFare(
                            dummyNumbers.baseFare,
                            dummyNumbers.timeRate,
                            store().home.distanceMatrix.rows[0].elements[0].duration.value,
                            dummyNumbers.distanceRate,
                            store().home.distanceMatrix.rows[0].elements[0].distance.value,
                            dummyNumbers.surge)
                        dispatch({
                            type: GET_FARE,
                            payload: fare
                        })
                    }
                }, 2000)
            })
            .catch((error) => console.log(error.message))
    }
}


//BOOK CAR

export const bookCar = () => {

    return (dispatch, store) => {
        // const nearByDrivers = store().Home.nearByDrivers
        const nearByDrivers = store().home.nearByDrivers;
        const nearByDriver = nearByDrivers[0/*Math.floor(Math.random() * nearByDrivers.length)*/];

        const payload = {
            data: {
                userName: "Karthik",
                pickUp: {
                    address: store().home.selectedAddress.selectedPickUp.address,
                    name: store().home.selectedAddress.selectedPickUp.name,
                    latitude: store().home.selectedAddress.selectedPickUp.latitude,
                    longitude: store().home.selectedAddress.selectedPickUp.longitude
                },
                dropOff: {
                    address: store().home.selectedAddress.selectedDropOff.address,
                    name: store().home.selectedAddress.selectedDropOff.name,
                    latitude: store().home.selectedAddress.selectedDropOff.latitude,
                    longitude: store().home.selectedAddress.selectedDropOff.longitude
                },
                fare: store().home.fare,
                status: "pending"
            },
            nearByDriver: {
                socketId: nearByDriver.socketId,
                driverId: nearByDriver.driverId,
                latitude: nearByDriver.coordinate.coordinates[1],
                longitude: nearByDriver.coordinate.coordinates[0]
            }
        }

        console.log("Payload", payload)
        fetch("http://192.168.0.102:3000/api/bookings", {
            method: 'POST', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, body: JSON.stringify(payload)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: BOOK_CAR,
                    payload: responseJson
                })
            })
            .catch((error) => {
                console.log("Error ", error.message)
            })
    }
}

export const getNearByDrivers = () => {

    return (dispatch, store) => {
        fetch(`http://192.168.0.102:3000/api/driverLocation?latitude=${store().home.region.latitude}&longitude=${store().home.region.longitude}`)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("Response ", responseJson)
                dispatch({
                    type: GET_NEARBY_DRIVERS,
                    payload: responseJson
                });
            })
            .catch((error) => {
                console.log("Error ".error.message)
            })
    }
}
