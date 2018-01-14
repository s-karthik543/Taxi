import React from 'react'
import {
    View
} from 'react-native'
import MapView from 'react-native-maps'
import SearchBox from '../../components/SearchBox'
import SearchResults from '../../components/SearchResults'
import styles from '../../utils/Styles'

export default ({
    region,
    getInputData,
    toggleSearchResultModal,
    getAddressPredictions,
    resultTypes,
    predictions,
    getSelectedAddress,
    selectedAddress,
    carMarker,
    nearByDrivers
 }) => {

    const { selectedPickUp, selectedDropOff } = selectedAddress || {}

    return (
        <View style={styles.container}>

            <MapView
                provider={MapView.PROVIDER_GOOGLE}
                showsUserLocation={true}
                style={styles.container}
                region={region} >

                {selectedPickUp && <MapView.Marker
                    coordinate={{ latitude: selectedPickUp.latitude, longitude: selectedPickUp.longitude }}
                    pinColor="green" />}

                {selectedDropOff && <MapView.Marker
                    coordinate={{ latitude: selectedDropOff.latitude, longitude: selectedDropOff.longitude }}
                    pinColor="red" />}

                {nearByDrivers && nearByDrivers.map((marker, index) =>
                    <MapView.Marker
                        key={index}
                        rotation={90}
                        coordinate={{
                            latitude: marker.coordinate.coordinates[1],
                            longitude: marker.coordinate.coordinates[0]
                        }}
                        image={carMarker} />
                )}

            </MapView>

            <SearchBox
                getInputData={getInputData}
                toggleSearchResultModal={toggleSearchResultModal}
                getAddressPredictions={getAddressPredictions}
                selectedAddress={selectedAddress} />

            {(resultTypes.pickUp || resultTypes.dropOff) && (predictions && predictions.length > 0) &&
                <SearchResults predictions={predictions} getSelectedAddress={getSelectedAddress} />}
        </View>
    )
}